interface PlayLayoutProps {
    children: React.ReactNode
  }
  
  export default function ContactLayout({ children }: PlayLayoutProps) {
    return <div className="mt-28 w-full min-h-full">{children}</div>
  }
  