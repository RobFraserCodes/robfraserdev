import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import Link from "next/link"

export default function ContactSection() {
    return (
      <div className="relative isolate bg-background px-6 py-24 sm:py-32 lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-foreground/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-64}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-64} className="overflow-visible fill-foreground/10">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2>Let&apos;s talk about your project</h2>
          <p>
            We help companies and individuals build out their brand guidelines.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form action="#" method="POST" className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="first-name">First name</Label>
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="last-name">Last name</Label>
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="mt-2.5">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <div className="mt-2.5">
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <div className="mt-2.5">
                    <Textarea
                      name="message"
                      id="message"
                      placeholder="Type your message here."
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button type="submit" 
                  className="w-full"  
                >
                  Let&apos;s talk
                </Button>
              </div>
              <p className="text-sm">By submitting this form, I agree to the{' '}
                <Link href="/privacy-policy" className="font-semibold text-primary">
                  privacy&nbsp;policy
                </Link>.
              </p>
            </form>

            {/* Testimonial */}
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
              <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-muted-foreground">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <img
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                    alt=""
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="text-base font-semibold text-foreground">Brenna Goyette</div>
                    <div className="text-sm leading-6 text-muted-foreground">CEO of Workcation</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
  