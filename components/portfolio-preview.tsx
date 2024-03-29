import { allGuides } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils";

const rotationOptions = [
    { className: "rotate-1", degrees: -30 },
    { className: "rotate-2", degrees: -15 },
    { className: "rotate-3", degrees: 15 },
    { className: "rotate-4", degrees: 30 },
  ];

let lastRotationIndex = -1; 

export default function PortfolioPreview() {
    const portfolio = allGuides
      .filter((portfolio) => portfolio.published)
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
      .slice(0, 3);

      const getRandomRotation = () => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * rotationOptions.length);
        } while (randomIndex === lastRotationIndex);
        lastRotationIndex = randomIndex;
        return rotationOptions[randomIndex];
      };

    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
        <h2 className="text-base text-primary text-center">My Portfolio</h2>
        <h3 className="text-center">View My Work</h3>
        <p className="text-center">
          Here are a few examples of my work. Want to see more?{" "}
          <Link 
            href="/guides"
            className="text-primary hover:text-primary/80 transition-colors duration-200 ease-in-out"
          > 
            View entire portfolio
          </Link>
        </p>
        <div className="my-16 flex flex-col items-center justify-center gap-5 py-4 sm:gap-8 lg:flex-row">
          {portfolio.map((item) => {
            const { className: rotationClass } = getRandomRotation();
            
            return (
                <Link href={item.slug} key={item._id} className="flex flex-col">
                    <article
                        className={cn(
                        "flex items-center justify-center relative rounded-2xl overflow-hidden w-80 h-80",
                        rotationClass
                        )}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 -z-10 h-full w-full object-cover"
                            width={500}
                            height={500}
                        />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/40" />
                        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-primary/10" />
                        <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 hover:opacity-100">
                            <span className="text-primary-foreground text-xl">{item.title}</span>
                        </div>
                    </article>
                </Link>
            );
          })}
        </div>
      </div>
    );
}

  