import { allGuides } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"
import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "./ui/button";

const projectOutcomes: Record<string, string> = {
  "Instagrub Mobile App Design": "Improved checkout flow and increased daily active users through clearer mobile UX.",
  "Moodiv8 Mobile App Design": "Created a social experience focused on wellbeing with stronger engagement patterns.",
  "MatchDay Mobile App Design": "Designed an interactive matchday experience with a clear, fan-first mobile journey.",
};

export default function PortfolioPreview() {
  const portfolio = allGuides
    .filter((portfolio) => portfolio.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-base text-primary">Selected Projects</h2>
      <h3 className="text-center">Built work, not just ideas</h3>
      <p className="text-center">
        A sample of product and design projects already delivered. Each case study shows
        the problem, approach, and final outcome.
      </p>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {portfolio.map((item) => (
          <article
            key={item._id}
            className="group overflow-hidden rounded-2xl border bg-background shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={600}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
            <div className="space-y-4 p-6">
              <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
              <p className="text-base leading-7 text-muted-foreground">
                {projectOutcomes[item.title] ?? item.description}
              </p>
              <Link href={item.slug} className={buttonVariants({ variant: "outline" })}>
                View Case Study
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/guides" className={buttonVariants({ variant: "default" })}>
          View Full Portfolio
        </Link>
      </div>
    </div>
  );
}
