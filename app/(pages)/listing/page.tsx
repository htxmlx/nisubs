import Section from '@/components/common/section'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  AccessibilityIcon,
  BathIcon,
  BedIcon,
  CameraIcon,
  CarIcon,
  ChefHatIcon,
  LocateIcon,
  MountainSnowIcon,
  StarIcon,
  UserIcon,
  WavesIcon,
  WifiIcon,
  WindIcon,
} from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  return (
    <Section className="mt-10 grid gap-8 px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <section className="grid gap-4">
        <Carousel className="rounded-xl overflow-hidden">
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/placeholder.svg"
                width={1200}
                height={600}
                alt="Listing Image"
                className="object-cover w-full aspect-[2/1]"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/placeholder.svg"
                width={1200}
                height={600}
                alt="Listing Image"
                className="object-cover w-full aspect-[2/1]"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/placeholder.svg"
                width={1200}
                height={600}
                alt="Listing Image"
                className="object-cover w-full aspect-[2/1]"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="grid gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">
            Cozy Mountain Retreat with Hot Tub
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <LocateIcon className="w-5 h-5" />
            <span>Santa Cruz, California</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="border w-11 h-11">
            <AvatarImage src="/placeholder-user.jpg" alt="Host" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="font-semibold">Hosted by Catherine</div>
            <div className="text-sm text-muted-foreground">
              Joined in 2010 &middot; Superhost
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <BedIcon className="w-5 h-5" />
            <span>1 Bedroom</span>
          </div>
          <div className="flex items-center gap-2">
            <BathIcon className="w-5 h-5" />
            <span>1 Bathroom</span>
          </div>
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <span>2 Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <WifiIcon className="w-5 h-5" />
            <span>Wifi</span>
          </div>
        </div>
      </section>
      <section className="grid gap-6">
        <h2 className="text-2xl font-bold">What this place offers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <MountainSnowIcon className="w-6 h-6" />
            <span>Mountain view</span>
          </div>
          <div className="flex items-center gap-2">
            <WavesIcon className="w-6 h-6" />
            <span>Beach access</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHatIcon className="w-6 h-6" />
            <span>Private chef</span>
          </div>
          <div className="flex items-center gap-2">
            <WifiIcon className="w-6 h-6" />
            <span>Wifi</span>
          </div>
          <div className="flex items-center gap-2">
            <CarIcon className="w-6 h-6" />
            <span>Parking</span>
          </div>
          <div className="flex items-center gap-2">
            <CameraIcon className="w-6 h-6" />
            <span>Security cameras</span>
          </div>
          <div className="flex items-center gap-2">
            <AccessibilityIcon className="w-6 h-6" />
            <span>Wheelchair accessible</span>
          </div>
          <div className="flex items-center gap-2">
            <WindIcon className="w-6 h-6" />
            <span>Patio</span>
          </div>
        </div>
      </section>
      <section className="grid gap-6">
        <h2 className="text-2xl font-bold">Location</h2>
        <div className="rounded-xl overflow-hidden">
          <div className="w-full object-cover" />
        </div>
      </section>
      <section className="grid gap-6">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <Avatar className="border w-11 h-11">
              <AvatarImage src="/placeholder-user.jpg" alt="Reviewer" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                </div>
                <span>1 week ago</span>
              </div>
              <div>
                Catherine&apos;s place was amazing! The views were incredible
                and the house was very clean. We had a great time.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="border w-11 h-11">
              <AvatarImage src="/placeholder-user.jpg" alt="Reviewer" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                </div>
                <span>1 week ago</span>
              </div>
              <div>
                We had a great time and would definitely stay again! Gorgeous
                views and a beautiful home.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="border w-11 h-11">
              <AvatarImage src="/placeholder-user.jpg" alt="Reviewer" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                </div>
                <span>1 week ago</span>
              </div>
              <div>
                We had a wonderful stay. The location is perfect and the
                amenities are top-notch.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  )
}
