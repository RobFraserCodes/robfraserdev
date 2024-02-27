import { SiteConfig, NavItem } from "@/types"
import { Icons } from "@/components/icons"

export const siteConfig: SiteConfig = {
  name: "Rob Fraser Dev",
  description:
    "Freelance web developer and designer based in the UK. Specialising in building fast, accessible and responsive software applications.",
  url: "https://www.robfraser.dev",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/robfrasercodes",
    github: "https://github.com/robfrasercodes",
  },
}

export const navigation = [
  { title: "Home", href: "/" },
  // { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Education", href: "/education" },
  { title: "My Work", href: "/guides" },
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
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/robfrasercodes/',
      icon: Icons.linkedIn,
    },
    {
      name: 'Medium',
      href: 'https://robfraserdev.medium.com/',
      icon: Icons.medium,
    }
  ],
}