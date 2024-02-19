'use client';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '@/config/site';
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from './theme-switch-button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const textColorClass = pathname === "/services" ? "text-white" : "text-foreground";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Rob Fraser Dev</span>
              <Image
                width={64}
                height={64}
                src="/logo.svg"
                alt="Rob Fraser Dev logo"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.title} href={item.href} 
                className={cn("text-sm font-semibold leading-6", 
                  textColorClass === "text-white" ? "text-white" : "text-foreground"
                )}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
            <ThemeSwitch />
            <Link
                href="#" 
                className={buttonVariants({ variant: "ghost" })}>
                Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
  <div className="fixed inset-0 z-50" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Rob Fraser Dev</span>
        <Image
            width={64}
            height={64}
            src="/logo.svg"
            alt="Rob Fraser Dev logo"
        />
      </Link>
      <Button
        type="button"
        onClick={() => setMobileMenuOpen(false)}
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </Button>
    </div>
    <div className="mt-6">
      <ul className="divide-y divide-foreground/5">
        {navigation.map((item) => (
          <li key={item.title} className="py-2">
            <Link
              href={item.href}
              className={cn("text-sm font-semibold leading-6 block", 
              textColorClass === "text-white" ? "text-white" : "text-foreground"
            )}>
              {item.title}
            </Link>
          </li>
        ))}
        <li className="py-2">
          <Link
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-gray-50"
          >
            Log in
          </Link>
        </li>
      </ul>
    </div>
  </Dialog.Panel>
</Dialog>

      </header>
  )
}
