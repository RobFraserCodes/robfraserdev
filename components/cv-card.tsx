import { CheckIcon, IdCardIcon, ArrowDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import SocialIcons from "./social-icon"

const workExperience = [
  {
    title: "Fullstack Developer",
    company: "RobFraser Dev",
    date: "Sept 2021 - Present",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
  },
  {
    title: "Liaison Manager",
    company: "Scottish Qualifications Authority",
    date: "April 2013 - Present",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
  },
  {
    title: "Quality Assurance Officer",
    company: "Inverness College UHI",
    date: "2006 - 2013",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
  },
  {
    title: "Software Development BSc",
    company: "University of the Highlands and Islands",
    date: "2006 - 2010",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
  },
]

type CVCardProps = {
  className?: string
}

export function CVCard({ className, ...props }: CVCardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
        <CardDescription className="flex items-center">View my work experience.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SocialIcons />
        {workExperience.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-full shadow-md p-2 w-16 h-16"
                width={64}
                height={64}
              />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="-my-2">{item.company}</p>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">{item.date}</p>
            </div>
          </div>
        ))} 
      </CardContent>
      <CardFooter className="py-4">
        <Link 
          target="_blank"
          href="/rob-fraser-cv.pdf" 
          className={buttonVariants({ variant: "default" })}
        >
          <ArrowDownIcon className="mr-2 h-4 w-4" />
          Download CV
        </Link>
      </CardFooter>
    </Card>
  );
}
