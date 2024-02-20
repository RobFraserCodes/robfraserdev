'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, BuildingOffice2Icon } from '@heroicons/react/20/solid'
import { z } from "zod"
import { toast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  message: z.string().min(11),
});

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState('');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      form.reset()
      setSuccessMessage('Thank you for your message! It has been sent successfully.')
      toast({
        title: 'Message sent',
        description: 'Thank you for your message! It has been sent successfully.',          
      })
    } catch (error) {
      console.error('An unexpected error happened:', error)
      toast({
        title: 'An unexpected error happened',
        description: 'Please try again later.',
      })
    }
  }

  return (
      <main className="relative bg-background">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <Image
            className="h-64 w-full bg-background object-cover sm:h-80 lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
            alt=""
            width={2560}
            height={3413}
          />
        </div>

        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2>Get in touch</h2>
            <p>
              Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
              integer elementum id sem. Arcu sed malesuada et magna.
            </p>

            <div className="mt-8 space-y-4 text-base leading-7 text-muted-foreground">
              <div className="flex items-center gap-x-4"> {/* Add items-center here */}
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
              <div className="flex items-center gap-x-4"> {/* Add items-center here */}
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
              <div className="flex items-center gap-x-4"> {/* Add items-center here */}
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-white" href="mailto:hi@robfraser.dev">
                    hi@robfraser.dev
                  </Link>
                </dd>
              </div>
            </div>

              {/* Contact form */}
              <>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="lg:flex-auto bg-background py-16">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field, fieldState: { error } }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            {error && <FormMessage>{error.message}</FormMessage>}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field, fieldState: { error } }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            {error && <FormMessage>{error.message}</FormMessage>}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState: { error } }) => (
                          <FormItem
                            className='col-span-2'
                          >
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            {error && <FormMessage>{error.message}</FormMessage>}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field, fieldState: { error } }) => (
                          <FormItem
                            className='col-span-2'
                          >
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            {error && <FormMessage>{error.message}</FormMessage>}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field, fieldState: { error } }) => (
                          <FormItem
                            className='col-span-2'
                          >
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            {error && <FormMessage>{error.message}</FormMessage>}
                          </FormItem>
                        )}
                      />

                    </div>
                    <div className="mt-8 w-full">
                      <Button 
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                    {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
                    <p className="text-sm">By submitting this form, I agree to the{' '}
                        <Link href="/privacy-policy" className="font-semibold text-primary hover:text-primary/60">
                          privacy&nbsp;policy
                        </Link>.
                    </p>
                  </form>
                </Form>
              </>
            </div>
          </div>
        </div>
      </main>
    )
  }
  