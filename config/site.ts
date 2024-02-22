import { SiteConfig, NavItem } from "@/types"
import { Icons } from "@/components/icons"

export const siteConfig: SiteConfig = {
  name: "MatchDay",
  description: "Predict and win with MatchDay, a football prediction game based on the uniqueness of the SPFL.",
  url: "https://www.robfraser.dev",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/robfrasercodes",
    github: "https://github.com/robfrasercodes",
  },
}

export const navigation = [
  { title: "Play", href: "/play" },
  { title: "About", href: "/about" },
  { title: "News", href: "/blog" },
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