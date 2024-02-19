'use client';

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// This is a form component that uses the zod library to validate the form data.
const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(11).max(11),
    message: z.string().min(10),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
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

    // const onSubmit = (data: FormValues) => {
    //     console.log(data)
    // }

    async function onSubmit(data: FormValues) {
        try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
        } catch (error) {
          console.error('An unexpected error happened:', error)
        }
      }


    return (
        <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="lg:flex-auto bg-background">
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
                <FormItem>
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
                <FormItem>
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
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} className='col-span-2'/>
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            </div>
            <div className='mt-8'>
                <Button 
                    className='w-full'
                    type="submit"
                >
                    Let&apos;s talk
                </Button>
            </div>
            <p className="text-sm">By submitting this form, I agree to the{' '}
                <Link href="/privacy-policy" className="font-semibold text-primary hover:text-primary/60">
                  privacy&nbsp;policy
                </Link>.
            </p>
          </form>
        </Form>
        </>
      );
      
}
