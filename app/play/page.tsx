import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function PlayPage() {
const isLoggedIn = false; // Placeholder for actual login state

return (
  <div className="container mx-auto px-4 py-16">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* MatchDay Predictor Card */}
      <div className="col-span-2">
        <div className="overflow-hidden rounded-lg shadow bg-gradient-to-r from-emerald-500 from-10% via-emerald-500 via-30% to-emerald-500 to-90%">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="uppercase text-white text-center">Predictor</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <Image
              className="mx-auto h-32 w-32 flex-shrink-0"
              src="/logo.png"
              alt="Football"
              width={128}
              height={128}
            />
          </div>
          <div className="px-4 py-4 sm:px-6">
            <Link
              href="/play/predictor"
              passHref
              className=""
            >
              <Button>Play Now</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* User Profile/Login Card */}
      <div className="col-span-1">
        <Card>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">User Profile</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              {isLoggedIn ? (
                <p>Welcome back, User!</p>
              ) : (
                <p>Log in to track your predictions and join leagues</p>
              )}
            </div>
            <div className="mt-3">
              {isLoggedIn ? (
                <Link href="/profile" passHref>
                  <Button>View Profile</Button>
                </Link>
              ) : (
                <Link href="/login" passHref>
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Fantasy Leagues Card */}
      <div className="col-span-2">
        <Card>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Fantasy Leagues</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Join a public league or create your own</p>
            </div>
            <div className="mt-3">
              <Link href="/leagues" passHref>
                <Button>View Leagues</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Create Your Own League Card */}
      <div className="col-span-1">
        <Card>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Create Your Own League</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Invite friends and compete against each other</p>
            </div>
            <div className="mt-3">
              <Link href="/leagues/create" passHref>
                <Button>Create League</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

    </div>
  </div>
);
}