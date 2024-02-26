'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { toast, useToast } from "@/components/ui/use-toast"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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

    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true);
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
          setIsSubmitting(false);
        } catch (error) {
          console.error('An unexpected error happened:', error);
          setSuccessMessage('');
          setIsSubmitting(false);
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
                <FormItem
                  className='col-span-2'
                >
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
                    disabled={isSubmitting}
                >
                {isSubmitting ? (
                        <div className="flex items-center justify-center">
                        <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : "Submit"}
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
      );
      
}
