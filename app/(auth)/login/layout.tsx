interface RegisterLayoutProps {
    children: React.ReactNode
  }
  
  export default function ContactLayout({ children }: RegisterLayoutProps) {
    return <div className="mt-32 w-full">{children}</div>
  }
  