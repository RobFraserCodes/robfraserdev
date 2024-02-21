import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CVCard } from './cv-card'

const features = [
  {
    name: 'UX Design',
    description:
      'Using the latest design tools, I can help you create a user experience that is intuitive and easy to use. I have experience with a variety of design tools and techniques.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Web Development',
    description:
      "Using the latest technologies, I can help you build a website that is fast, secure, and easy to use. I'm experienced with a variety of frameworks and languages.",
    icon: ServerIcon,
  }
]

export default function CVFeature() {
  return (
    <div className="overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-base text-primary">Rob Fraser Dev</h2>
                <h3>About Me</h3>
                <p>
                    I have over 20 years of experience in the tech industry. I have worked with a variety of clients and
                    companies to help them achieve their goals. I am dedicated to providing the highest quality of service
                    and support to my clients.
                </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="sm:px-6 lg:px-0">
            <CVCard className="w-full" />
          </div>
          
        </div>
      </div>
    </div>
  )
}