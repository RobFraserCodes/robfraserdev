import Link from "next/link";
import { buttonVariants } from "./ui/button";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

const githubUsername = "RobFraserCodes";

async function getLatestRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc&per_page=6&type=owner`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const repos = (await response.json()) as GitHubRepo[];
    return repos.filter((repo) => !repo.fork).slice(0, 4);
  } catch {
    return [];
  }
}

export default async function GitHubProjects() {
  const repos = await getLatestRepos();

  if (!repos.length) {
    return null;
  }

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base text-primary">GitHub Projects</h2>
          <h3>Latest builds from my codebase</h3>
          <p>
            These are my most recently updated public repositories. If you want,
            I can walk you through architecture decisions and implementation details.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="rounded-2xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-xl font-semibold text-foreground">{repo.name}</h4>
                <span className="text-sm text-muted-foreground">
                  {repo.stargazers_count} stars
                </span>
              </div>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {repo.description ?? "Open-source project by Rob Fraser."}
              </p>
              <div className="mt-4 flex items-center justify-between gap-4 text-sm text-muted-foreground">
                <span>{repo.language ?? "Code"}</span>
                <span>
                  Updated{" "}
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(repo.updated_at))}
                </span>
              </div>
              <div className="mt-5">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline" })}
                >
                  View Repository
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={`https://github.com/${githubUsername}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "default" })}
          >
            Browse All GitHub Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
