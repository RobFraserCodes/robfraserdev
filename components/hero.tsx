import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
import { AspectRatio } from './ui/aspect-ratio'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default async function Hero() {

    return (
        <div className="bg-background py-24 bg-hero-pattern">
        <div className="relative isolate">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <div className="flex py-4">
                <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="font-semibold text-primary">Find out more</span>
                    <span className="h-4 w-px bg-foreground/10" aria-hidden="true" />
                    <Link href="/about" className="flex items-center gap-x-1">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Master Your Fantasy League
                      <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Link>
                </div>
                </div>
                <h1>Play, Predict, Win with MatchDay</h1>
                <p>Welcome to MatchDay, the home of Scottish fantasy football. Assemble your squad, engage your mates in custom leagues, and make every match count. MatchDay brings you closer to the field with live scores, in-depth analytics, and a community of passionate fans. Whether you&apos;re here for glory, fun, or the love of the game, MatchDay is your arena. Ready to take the field?</p>
                <div className="mt-10 flex items-center gap-x-6">

                <Link
                    className={buttonVariants({variant: 'default'})}
                    href="/get-started"
                    >Get started
                </Link>

                <Link 
                    className={buttonVariants({variant: 'outline'})}
                    href="/about"
                    >Learn more <span aria-hidden="true">→</span>
                </Link>
                
                </div>
            </div>

            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <div className='w-[350px] mx-auto'>
                <h1 className=' sr-only'>MatchDay Card Pack</h1>

                <AspectRatio ratio={3/5}>
                    <Link href="/get-started">
                        <Image 
                            src="/images/matchday-pack.png" 
                            alt="MatchDay Card Pack" 
                            width={350}
                            height={583}    
                        />
                    </Link>
                </AspectRatio>
                </div>

            </div>
            </div>
        </div>
        </div>
    )
}