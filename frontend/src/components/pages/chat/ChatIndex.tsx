"use client";

import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  FileInput,
  Grid,
  Group,
  Input,
  Menu,
  ScrollArea,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import {
  IconFile,
  IconMicrophone,
  IconMoodSmile,
  IconPaperclip,
  IconPencilPlus,
  IconPhoto,
  IconPlus,
  IconSearch,
  IconSend,
  IconStar,
  IconVideo,
} from "@tabler/icons-react";
import { useState } from "react";

export default function ChatIndex() {
  const [item, setItem] = useState(false);

  return (
    <div className="w-full h-[calc(100vh-200px)]">
      <h3
        className="font-bold text-2xl mb-10 mt-3
      "
      >
        Chat
      </h3>
      <div className="grid grid-cols-8 gap-4 h-[calc(100%-4rem)] ">

        

        <Card className="col-span-2 flex flex-col  h-full  p-4 ">
          <Group align="center" justify="space-between" mb={"md"} className="">
            <Group gap={"xs"}>
              <p className="font-semibold md:text-sm  lg:text-xl">
                Conversation
              </p>

              <Badge size="lg" circle>
                {" "}
                10
              </Badge>
            </Group>
              <div className="flex items-center gap-3"></div>
            <ActionIcon variant="subtle" size={"lg"}>
              <IconSearch size={20} />
            </ActionIcon>
          </Group>

          {/* search input */}

          <TextInput
            placeholder="Search conversation..."
            leftSection={<IconSearch size={16} />}
            mb={"md"}
          />
          <ScrollArea className="flex-1">
            <div className="p-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <Group gap="sm">
                    <Avatar size="md" radius="xl" color="blue">
                      A{i}
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <Text size="sm" fw={500} truncate>
                        User {i}
                      </Text>
                      <Text size="xs" c="dimmed" truncate>
                        Last message preview...
                      </Text>
                    </div>
                  </Group>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-3 flex  items-end justify-end">
            <ActionIcon variant="light">
              <Tooltip color="blue" label="start a new chat">
                <IconPencilPlus size={20} />
              </Tooltip>
            </ActionIcon>
          </div>
        </Card>

        <Card className=" col-span-6 flex flex-col h-full p-0 m-0   ">
          {/* header message */}

          <Group align="center" p={10} justify="space-between">
            <Group>
              <Avatar size={"md"} radius={"xl"} color="yellow">
                Ma
              </Avatar>
              <Text fw={600}>Mahdi zabihi</Text>
            </Group>
            <Group>
              <ActionIcon variant="subtle" size={"lg"}>
                <IconSearch size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" size={"lg"}>
                <IconStar size={20} />
              </ActionIcon>
            </Group>
          </Group>

          <div className="flex-1 overflow-y-auto m-0 px-0 py-4 rounded bg-[#FAFCFE]"></div>

          <div className="shrink-0 p-4  bg-white">
            <Group gap="sm" align="flex-end">
              {/* منوی آپلود */}
              <Menu shadow="md" width={200} position="top-start">
                <Menu.Target>
                  <ActionIcon
                    size="lg"
                    variant="light"
                    color="blue"
                    radius="xl"
                  >
                    <IconPaperclip size={20} />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>آپلود فایل</Menu.Label>
                  <Menu.Item leftSection={<IconPhoto size={16} />}>
                    تصویر
                  </Menu.Item>
                  <Menu.Item leftSection={<IconFile size={16} />}>
                    سند
                  </Menu.Item>
                  <Menu.Item leftSection={<IconVideo size={16} />}>
                    ویدیو
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* استیکر/ایموجی */}
              <ActionIcon size="lg" variant="light" color="yellow" radius="xl">
                <IconMoodSmile size={20} />
              </ActionIcon>

              {/* Input */}
              <TextInput
                placeholder="پیام خود را بنویسید..."
                className="flex-1"
                size="md"
                radius="xl"
              />

              {/* دکمه ارسال */}
              <ActionIcon size="lg" variant="filled" color="blue" radius="xl">
                <IconSend size={20} />
              </ActionIcon>
            </Group>
          </div>
        </Card>
      </div>
    </div>
  );
}
