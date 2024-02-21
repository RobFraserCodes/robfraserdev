import React from 'react'
import { socialLinks } from '@/config/site'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type SocialIconProps = {
    className?: string
}

export default function SocialIcons({className}: SocialIconProps) {
  return (
    <div className={cn('flex space-x-8', className)}>
        {socialLinks.social.map((item) => (
        <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            {item.icon ? <item.icon className="h-6 w-6" /> : item.name}
        </Link>
        ))}
    </div>
  )
}
