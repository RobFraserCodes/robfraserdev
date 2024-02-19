interface ContactLayoutProps {
    children: React.ReactNode
  }
  
  export default function ContactLayout({ children }: ContactLayoutProps) {
    return <div className="mt-32 w-full">{children}</div>
  }
  