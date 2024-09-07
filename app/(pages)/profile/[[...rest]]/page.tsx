'use client'
import Section from '@/components/common/section'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useClerk, useUser } from '@clerk/nextjs'
import { HeartIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const { signOut } = useClerk()
  const { user } = useUser()
  const router = useRouter()
  return (
    <Section className="w-full bg-background">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24 ring-2 ring-primary">
              <AvatarImage src={user?.imageUrl} alt="@tiktokuser" />
              <AvatarFallback>TU</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{user?.fullName}</h2>
              <p className="text-muted-foreground">
                {user?.emailAddresses[0].emailAddress}
              </p>
            </div>
            <p className="max-w-[300px] text-center text-muted-foreground">
              Exploring the world of TikTok, one video at a time. 🎥
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">12</span>
                <span className="text-muted-foreground">Saved</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">0</span>
                <span className="text-muted-foreground">My Listing</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">27</span>
                <span className="text-muted-foreground">Total Listing</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push('/user-profile')}
              >
                Edit Profile
              </Button>
              <Button
                size="lg"
                variant="destructive"
                onClick={() => signOut({ redirectUrl: '/' })}
              >
                Log Out
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="TikTok Video"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: '400/400', objectFit: 'cover' }}
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-white">
                <HeartIcon className="h-4 w-4" />
                <span>123K</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="TikTok Video"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: '400/400', objectFit: 'cover' }}
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-white">
                <HeartIcon className="h-4 w-4" />
                <span>456K</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="TikTok Video"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: '400/400', objectFit: 'cover' }}
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-white">
                <HeartIcon className="h-4 w-4" />
                <span>789K</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="TikTok Video"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: '400/400', objectFit: 'cover' }}
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-white">
                <HeartIcon className="h-4 w-4" />
                <span>321K</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="TikTok Video"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: '400/400', objectFit: 'cover' }}
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-white">
                <HeartIcon className="h-4 w-4" />
                <span>654K</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="TikTok Video"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: '400/400', objectFit: 'cover' }}
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-white">
                <HeartIcon className="h-4 w-4" />
                <span>987K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
