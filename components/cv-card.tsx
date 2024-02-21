import { CheckIcon, IdCardIcon, ArrowDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
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

type CardProps = React.ComponentProps<typeof Card>

export function CVCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
        <CardDescription className="flex items-center">View my work experience.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SocialIcons />
        <div className="flex justify-between">
            <div className="flex items-center space-x-4">
                <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    className="rounded-full w-16 h-16 p-2 shadow-md"
                    alt=""
                    width={20}
                    height={20}
                />
                <div>
                    <h4>Frontend Developer</h4>
                    <p className="-my-2">Company Name</p>
                </div>
                
            </div>
            <div>
                <p className="text-muted-foreground">Jan 2020 - Present</p>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link 
            href="/rob-fraser-cv.pdf"
            className={buttonVariants({ variant: "default" })}
        >
          <ArrowDownIcon className="mr-2 h-4 w-4" />
          Download CV
        </Link>
      </CardFooter>
    </Card>
  )
}
