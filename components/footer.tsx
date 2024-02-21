import { navigation } from "@/config/site"
import SocialIcons from "./social-icon"
  
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.title} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center">
          <SocialIcons />
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {year} Rob Fraser Development. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
  