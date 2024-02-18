import { allPosts } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
    const posts = allPosts
        .filter((post) => post.published)
        .sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date))
        })

    return (
        <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
            <h2>From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
            </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                <article
                key={post._id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                >
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    width={500}
                    height={500}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={post.date} className="mr-8">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    })}
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    </div>
                    {post.authors.map((author) => (
                    <div key={author}>
                        <span className="ml-4">{author}</span>
                    </div>
                    ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <Link href={post.slug}>
                    <span className="absolute inset-0" />
                    {post.title}
                    </Link>
                </h3>
                </article>
            ))}
            </div>
        </div>
        </div>
    )
}
