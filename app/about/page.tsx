'use client'

import BlogPreview from '@/components/blog-preview'
import Image from 'next/image'
import { stats, values } from '@/content/data/stats'
import { TypeAnimation } from 'react-type-animation'
import ContactSection from '@/components/cta-contact'

export default function AboutPage() {

  return (
      <main className="isolate">
        
        {/* Hero section */}
        <div className="relative isolate -z-10 mt-16">

          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1>Elevating Your Digital Presence</h1>
                  <p>
                    In an era where digital presence is not just an option but a necessity, we stand at the forefront of innovation and design, dedicated to transforming your ideas into reality. As a seasoned freelancer specialising in mobile app design, I bring a blend of creativity, technical prowess, and a user-centric approach to every project. My mission is to deliver sleek, functional mobile apps that not only meet but exceed your expectations, ensuring your business thrives in the digital landscape.
                  </p>
                </div>
                
                {/* Coding Image */}
                <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                  <div className="shadow-lg md:rounded-3xl">
                    <div className="bg-primary [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                      <div
                        className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-primary-foreground opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                        aria-hidden="true"
                      />
                      <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                        <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                          <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                              <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                  NotificationSetting.jsx
                                </div>
                                <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                              </div>
                            </div>
                            <div className="px-6 pb-14 pt-6">
                              <TypeAnimation
                                sequence={
                                  [
                                    "Welcome to the future of mobile design",
                                    2000,
                                    "import React from 'react'",
                                    2000,
                                    "import { App } from './App'",
                                    2000,
                                  ]
                                }
                                repeat={Infinity}
                                className="text-white"
                                speed={50}
                                deletionSpeed={50}
                                />
                            </div>
                          </div>
                        </div>
                        <div
                          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2>Our mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p>
                  At the core of our work is a simple, yet powerful mission: to design mobile applications that empower businesses and delight users. We believe in creating digital experiences that are intuitive, engaging, and aesthetically pleasing, driving growth and innovation. 
                </p>
                <div className="mt-10 max-w-xl text-base leading-7">
                  <p>
                  Through a collaborative process, we work closely with our clients, embracing challenges and celebrating the journey from concept to launch. Our commitment to excellence and passion for design fuels our quest to shape the future of mobile interactions.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-foreground">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            width={1416}
            height={708}
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2>Our Guiding Principles</h2>
            <p>
              Our values are the driving force behind our work, shaping our approach to design and the relationships we build with our clients. We believe in creating a culture of excellence, innovation, and collaboration, ensuring every project is a success.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-foreground">{value.name}</dt>
                <dd className="mt-1 text-muted-foreground">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className="h-[40rem] w-[80rem] flex-none stroke-foreground/20" aria-hidden="true">
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-foreground/20">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Trusted by the world&apos;s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>

        {/* Blog section */}
        <BlogPreview />

        {/* Contact Form */}
        <ContactSection />

      </main>
  )
}
