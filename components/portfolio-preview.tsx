import { allGuides } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils";

const rotationOptions = [
    { className: "rotate-1", degrees: -20 },
    { className: "rotate-2", degrees: -10 },
    { className: "rotate-3", degrees: 0 },
    { className: "rotate-4", degrees: 10 },
    { className: "rotate-5", degrees: 20 },
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
        <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
          {portfolio.map((item) => {
            const { className: rotationClass } = getRandomRotation();
            
            return (
              <article
                key={item._id}
                className={cn(
                  "relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 pb-8 pt-80 sm:pt-48 lg:pt-80 px-40",
                  rotationClass
                )}
              >
                <Link href={item.slug}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    width={500}
                    height={500}
                  />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    );
}

  