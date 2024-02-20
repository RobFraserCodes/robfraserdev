import ContactForm from "./contact-form"
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid"
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
            {/* Contact form */}
            <ContactForm />

            {/* Address */}
            <>
            <dl className="mt-10 space-y-4 text-base leading-7 text-muted-foreground">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </dt>
                <dd>
                  Larch House
                  <br />
                  Daviot, Inverness, IV2 5XQ
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-foreground" href="tel:+44 (0) 77277 77494">
                    +44 (0) 77277 77494
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-foreground" href="mailto:hi@robfraser.dev">
                    hi@robfraser.dev
                  </Link>
                </dd>
              </div>
            </dl>
            </>

          </div>
        </div>
      </div>
    )
  }
  