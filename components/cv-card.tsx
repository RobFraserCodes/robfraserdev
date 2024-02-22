import { ArrowDownCircleIcon, CommandLineIcon, UserGroupIcon, AcademicCapIcon, DocumentChartBarIcon } from "@heroicons/react/20/solid"
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
import SocialIcons from "./social-icon"

const workExperience = [
  {
    title: "Fullstack Developer",
    company: "RobFraser Dev",
    date: "Sept 2021 - Present",
    icon: <CommandLineIcon className="h-6 w-6 text-primary-foreground m-2" />,
  },
  {
    title: "Liaison Manager",
    company: "Scottish Qualifications Authority",
    date: "April 2013 - Present",
    icon: <UserGroupIcon className="h-6 w-6 text-primary-foreground m-2" />,
  },
  {
    title: "Quality Assurance Officer",
    company: "Inverness College UHI",
    date: "2006 - 2013",
    icon: <DocumentChartBarIcon className="h-6 w-6 text-primary-foreground m-2" />,
  },
  {
    title: "Software Development BSc",
    company: "University of the Highlands and Islands",
    date: "2006 - 2010",
    icon: <AcademicCapIcon className="h-6 w-6 text-primary-foreground m-2" />,
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
          <div key={index} className="flex justify-between py-2 align-center">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-background w-8 h-8 shadow-md flex justify-center items-center">
                <div className="rounded-full bg-primary">{item.icon}</div>
              </div>
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
          <ArrowDownCircleIcon className="mr-2 h-4 w-4" />
          Download CV
        </Link>
      </CardFooter>
    </Card>
  );
}
