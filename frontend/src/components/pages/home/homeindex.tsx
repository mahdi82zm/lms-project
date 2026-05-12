"use client";

import { Avatar, Badge, Button, Card, Group, Input, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import { title } from "process";
import React from "react";



interface Post {
  id :number ,
  author :string,
  role :string,
  avatar :string,
  verified? : boolean,
  video?:string,
  title : string,
  description : string,
  likes : number,
  comments : number,
  shares :number,
  isLiked? : boolean,
  time :  string,
  music? : {
    name : string,
    artist : string
  }
  image?:string

}


export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    author: "Carl Matson",
    role: "Design",
    avatar: "/avatars/carl.jpg",
    verified: true,
    video: "/videos/piano.mp4",
    title: "piano",
    description: "Beautiful piano performance in the evening 🎹✨",
    likes: 12500,
    comments: 340,
    shares: 89,
    isLiked: false,
    time: "12 minutes ago",
    music: {
      name: "Moonlight Sonata",
      artist: "Beethoven"
    }
  },
  {
    id: 2,
    author: "Sarah Johnson",
    role: "Photography",
    avatar: "/avatars/sarah.jpg",
    verified: false,
    image: "/images/sunset.jpg",
    title: "Golden Hour",
    description: "Captured this stunning sunset at the beach 🌅",
    likes: 8900,
    comments: 210,
    shares: 45,
    time: "1 hour ago"
  },
  {
    id: 3,
    author: "Mike Chen",
    role: "Developer",
    avatar: "/avatars/mike.jpg",
    verified: true,
    video: "/videos/coding.mp4",
    title: "Coding Session",
    description: "Building a new feature with React and TypeScript 💻",
    likes: 15200,
    comments: 567,
    shares: 123,
    isLiked: true,
    time: "3 hours ago"
  },
  {
    id: 4,
    author: "Emma Wilson",
    role: "Artist",
    avatar: "/avatars/emma.jpg",
    image: "/images/painting.jpg",
    title: "Abstract Art",
    description: "My latest painting - what do you think? 🎨",
    likes: 6700,
    comments: 189,
    shares: 34,
    time: "5 hours ago"
  },
  {
    id: 5,
    author: "Alex Rodriguez",
    role: "Fitness",
    avatar: "/avatars/alex.jpg",
    verified: true,
    video: "/videos/workout.mp4",
    title: "Morning Workout",
    description: "Start your day with energy! 💪 #fitness #motivation",
    likes: 23400,
    comments: 890,
    shares: 234,
    time: "8 hours ago",
    music: {
      name: "Workout Mix",
      artist: "DJ Fitness"
    }
  },
  {
    id: 6,
    author: "Lisa Park",
    role: "Chef",
    avatar: "/avatars/lisa.jpg",
    image: "/images/food.jpg",
    title: "Homemade Pasta",
    description: "Fresh pasta from scratch 🍝 Recipe in comments!",
    likes: 11200,
    comments: 445,
    shares: 167,
    isLiked: true,
    time: "12 hours ago"
  },
  {
    id: 7,
    author: "David Kim",
    role: "Travel",
    avatar: "/avatars/david.jpg",
    verified: true,
    video: "/videos/travel.mp4",
    title: "Tokyo Streets",
    description: "Exploring the vibrant streets of Tokyo 🇯🇵✨",
    likes: 34500,
    comments: 1200,
    shares: 456,
    time: "1 day ago",
    music: {
      name: "Tokyo Drift",
      artist: "Teriyaki Boyz"
    }
  },
  {
    id: 8,
    author: "Nina Patel",
    role: "Fashion",
    avatar: "/avatars/nina.jpg",
    verified: false,
    image: "/images/fashion.jpg",
    title: "Street Style",
    description: "Today's outfit inspiration 👗 #fashion #style",
    likes: 9800,
    comments: 312,
    shares: 78,
    time: "1 day ago"
  },
  {
    id: 9,
    author: "Tom Anderson",
    role: "Music",
    avatar: "/avatars/tom.jpg",
    verified: true,
    video: "/videos/guitar.mp4",
    title: "Acoustic Cover",
    description: "Covering my favorite song 🎸",
    likes: 18900,
    comments: 678,
    shares: 234,
    isLiked: false,
    time: "2 days ago",
    music: {
      name: "Wonderwall",
      artist: "Oasis"
    }
  },
  {
    id: 10,
    author: "Maya Singh",
    role: "Nature",
    avatar: "/avatars/maya.jpg",
    image: "/images/mountains.jpg",
    title: "Mountain View",
    description: "Breathtaking views from the summit 🏔️",
    likes: 14300,
    comments: 423,
    shares: 189,
    time: "2 days ago"
  },
  {
    id: 11,
    author: "Chris Brown",
    role: "Comedy",
    avatar: "/avatars/chris.jpg",
    verified: true,
    video: "/videos/funny.mp4",
    title: "Daily Struggles",
    description: "When you try to adult but fail 😂",
    likes: 45600,
    comments: 2300,
    shares: 890,
    isLiked: true,
    time: "3 days ago"
  },
  {
    id: 12,
    author: "Sophia Lee",
    role: "Beauty",
    avatar: "/avatars/sophia.jpg",
    verified: false,
    image: "/images/makeup.jpg",
    title: "Makeup Tutorial",
    description: "Glam look for tonight 💄✨",
    likes: 7800,
    comments: 234,
    shares: 56,
    time: "3 days ago"
  },
  {
    id: 13,
    author: "Ryan Cooper",
    role: "Sports",
    avatar: "/avatars/ryan.jpg",
    verified: true,
    video: "/videos/basketball.mp4",
    title: "Game Highlights",
    description: "Best plays from last night's game 🏀🔥",
    likes: 28900,
    comments: 1100,
    shares: 345,
    time: "4 days ago"
  },
  {
    id: 14,
    author: "Olivia Martinez",
    role: "Dance",
    avatar: "/avatars/olivia.jpg",
    verified: true,
    video: "/videos/dance.mp4",
    title: "Choreography",
    description: "New dance routine! What do you think? 💃",
    likes: 32100,
    comments: 1450,
    shares: 567,
    isLiked: false,
    time: "5 days ago",
    music: {
      name: "Levitating",
      artist: "Dua Lipa"
    }
  },
  {
    id: 15,
    author: "James Taylor",
    role: "Architecture",
    avatar: "/avatars/james.jpg",
    image: "/images/building.jpg",
    title: "Modern Design",
    description: "Stunning architecture in downtown 🏢",
    likes: 5600,
    comments: 145,
    shares: 34,
    time: "5 days ago"
  }
];


export default function HomeIndex() {
  return (
    <div>
      {/* header bar */}
      <Group justify="space-between" align="center">
        <Text fw={"bold"} size="xl">
          Popular Tread
        </Text>
        <Input leftSection={<IconSearch size={16} />} placeholder="Search..." />
      </Group>

      {/* Card items */}
      <Group mt={30} gap={20}>
        {/* 1 */}
        <Card shadow="sm" className="px-10 flex flex-col gap-3">
          <div className="relative aspect-auto h-30 w-60">
            <Image
              alt="course"
              className="absolute rounded"
              src="/images/figma.png"
              fill
            />
          </div>

          <Text>Fixed bug on BigSur</Text>

          <Group justify="space-between" align="center">
            <div>
              <Avatar>M</Avatar>
            </div>
            <Badge color="violet" variant="light" radius={"sm"}>
              Disign
            </Badge>
          </Group>
        </Card>

        {/* 2 */}
        <Card shadow="sm" className="px-10 flex  flex-col gap-3">
          <div className="relative  aspect-auto h-30 w-60">
            <Image
              alt="course"
              className="absolute rounded"
              src="/images/figma.png"
              fill
            />
          </div>

          <Text>Fixed bug on BigSur</Text>

          <Group justify="space-between" align="center">
            <div>
              <Avatar>M</Avatar>
            </div>
            <Badge color="red" variant="light" radius={"sm"}>
              Developer
            </Badge>
          </Group>
        </Card>

        {/* 3 */}
        <Card shadow="sm" className="px-10 flex  flex-col gap-3">
          <div className="relative  aspect-auto h-30 w-60">
            <Image
              alt="course"
              className="absolute rounded"
              src="/images/figma.png"
              fill
            />
          </div>

          <Text>Fixed bug on BigSur</Text>

          <Group justify="space-between" align="center">
            <div>
              <Avatar>M</Avatar>
            </div>
            <Badge color="green" variant="light" radius={"sm"}>
              UX Design
            </Badge>
          </Group>
        </Card>

        {/* 4 */}
        <Card shadow="sm" className="px-10 flex  flex-col gap-3">
          <div className="relative  aspect-auto h-30 w-60">
            <Image
              alt="course"
              className="absolute rounded"
              src="/images/figma.png"
              fill
            />
          </div>

          <Text>Fixed bug on BigSur</Text>

          <Group justify="space-between" align="center">
            <div>
              <Avatar>M</Avatar>
            </div>
            <Badge color="yellow" variant="light" radius={"sm"}>
              Illustration
            </Badge>
          </Group>
        </Card>
      </Group>

      {/* filter button */}

      <Group my={20}>
        <Button variant="light" color="yellow">
          Popular
        </Button>
        <Button variant="light" color="orange">
          Recent
        </Button>
        <Button variant="light" color="red">
          Followed Forum
        </Button>
      </Group>

      {/* main */}

      <div className="grid grid-cols-12 ">
        <div className="col-span-9">
          <Card>
            <video src="/videos/piano.mp4" controls width={"100%"} />
          </Card>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
