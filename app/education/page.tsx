import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ContactSection from "@/components/cta-contact";

const educationHighlights = [
  "Built around real classroom and teacher workflows",
  "Focused on measurable learning outcomes and engagement",
  "Designed for scalable rollout across schools and cohorts",
  "Combines education expertise with modern product delivery",
];

const educationUseCases = [
  {
    title: "Curriculum-Aligned Learning Experiences",
    description:
      "Designing digital learning journeys that map to your curriculum, assessment goals, and teaching strategy.",
  },
  {
    title: "Teacher-Friendly Workflows",
    description:
      "Reducing admin overhead with practical tools that support lesson delivery, feedback loops, and progress tracking.",
  },
  {
    title: "Student Engagement by Design",
    description:
      "Using product design principles to improve motivation, completion rates, and confidence in independent learning.",
  },
];

export default function EducationPage() {
  return (
    <div className="bg-background">
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base font-semibold uppercase tracking-wide text-primary">
              Education Technology
            </p>
            <h1 className="mt-3">Fianais: My New EdTech Project</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Fianais is my latest education-focused platform. It combines my teaching
              background with modern product development to build practical digital tools
              for learners, teachers, and education teams.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://www.fianais.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "default" })}
              >
                Visit Fianais
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
                Discuss an EdTech Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-base text-primary">Why Fianais</h2>
            <h3>Built from real education experience</h3>
            <p>
              Before moving fully into digital product work, I spent years in education.
              Fianais brings that experience into a focused platform designed to solve
              real problems in teaching and learning, not generic software problems.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {educationHighlights.map((item) => (
              <div key={item} className="rounded-xl border bg-background p-5">
                <p className="m-0 text-base leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-base text-primary">What I&apos;m Building</h2>
            <h3>Core focus areas for schools and learning providers</h3>
            <p>
              Fianais is focused on practical outcomes: better learning experiences,
              clearer progress visibility, and tools that teachers can actually adopt
              without heavy training.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {educationUseCases.map((item) => (
              <article key={item.title} className="rounded-2xl border bg-background p-6">
                <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border bg-muted/20 p-8 text-center">
            <h4 className="text-2xl font-semibold text-foreground">
              Looking for a partner on an EdTech build?
            </h4>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              I work with education organisations and founders to design and build
              learning products that are clear, fast, and outcome-focused.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ variant: "default" })}>
                Start a Conversation
              </Link>
              <Link
                href="https://www.fianais.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "ghost" })}
              >
                Explore Fianais
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
