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
  

export default function PortfolioPreview() {
    const portfolio = allGuides
      .filter((portfolio) => portfolio.published)
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
      .slice(0, 5);

      const getRandomRotation = () => {
        const randomIndex = Math.floor(Math.random() * rotationOptions.length);
        return rotationOptions[randomIndex];
      };

    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base text-primary text-center">My Portfolio</h2>
        <h3 className="text-center">View My Work</h3>
        <p className="text-center">
          Here are a few examples of my work. Want to see more?{" "}
          <Link 
            href="/guides"
            className="text-primary hover:text-primary/80 transition-colors duration-200 ease-in-out"
          > 
            View my portfolio
          </Link>
        </p>
        <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
          {portfolio.map((item) => {
            const { className: rotationClass } = getRandomRotation();
            
            return (
              <div>
                <Link href={item.slug} key={item._id}>
                    <article
                        className={cn(
                        "my-24 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 pb-8 pt-80 sm:pt-48 lg:pt-80 px-40 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out",
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
              </div>
            );
          })}
        </div>
      </div>
    );
}

  