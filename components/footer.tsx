import { navigation } from "@/config/site"
import { socialLinks } from "@/config/site"
  
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.title} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {socialLinks.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              {item.name}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {year} Rob Fraser Development. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
  