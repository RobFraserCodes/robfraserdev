import { SiteConfig, NavItem } from "@/types"
import { TwitterLogoIcon } from "@radix-ui/react-icons"
import { Icons } from "@/components/icons"

export const siteConfig: SiteConfig = {
  name: "Rob Fraser Dev",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "https://www.robfraser.dev",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/robfrasercodes",
    github: "https://github.com/robfrasercodes",
  },
}

export const navigation = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
]

export const socialLinks = {
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/robfraserdev/',
      icon: Icons.instagram,
    },
    {
      name: 'X',
      href: 'https://twitter.com/robfrasercodes',
      icon: Icons.twitter,

    },
    {
      name: 'GitHub',
      href: 'https://github.com/RobFraserCodes/',
      icon: Icons.gitHub,
    },
  ],
}