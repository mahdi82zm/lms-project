"use client";

import {
  Anchor,
  Badge,
  Button,
  Card,
  Checkbox,
  Group,
  NavLink,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Image from "next/image";

import { IconLoader, IconLock, IconMail, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { notifications } from "@mantine/notifications";
export default function ForgetPasswordIndex() {
  const [loading, setIsLoading] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [erorr, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    notifications.show({
      title: "خطا",
      message: "رمز  عبور  و نام کاربری یکسان نیستند  ",
      color: "red",
      icon: <IconX size={18} />,
      position: "top-center",
    });
  };
  return (
    <div className="flex w-screen min-h-screen items-center justify-center gap-10 ">
      <div className="lg:w-1/2 h-full flex items-center justify-center  p-8">
        <form onSubmit={handleSubmit} className="md;w-1/2" dir="rtl">
          <Card padding="xl" radius="md" className=" w-full  max-w-md">
            <Stack>
              <Group justify="center" align="center">
                <Title order={2}>بازیابی رمز عبور </Title>
                <Badge color="blue" variant="light">
                  نسخه جدید
                </Badge>
              </Group>

              <Stack>
                <TextInput
                  type="email"
                  label="email"
                  placeholder="your@email.com"
                  leftSection={<IconMail size={16} />}
                  required
                />
              </Stack>

              <Button
                variant="gradient"
                gradient={{ from: "blue", to: "purple" }}
                size="md"
                fullWidth
                mt="md"
                type="submit"
              >
                {loading ? <IconLoader className="animate-spin" /> : "تایید"}
              </Button>

              <Link
                href="/login"
                className=" text-blue-600 hover:text-blue-800 hover:underline "
                aria-placeholder="pshf "
              >
                حساب کاربری دارید؟
                <Anchor
                  component={Link}
                  href="/login"
                  c="blue.6"
                  style={{ textDecoration: "none" }}
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                      color: "var(--mantine-color-blue-8)",
                    },
                  }}
                >
                  وارد شوید
                </Anchor>
              </Link>
              <Link href="#" >
                به راهنمایی نیاز دارید؟
                <Anchor>ارتباط با پشتیابنی مگا LMS</Anchor>
              </Link>
            </Stack>
          </Card>
        </form>
      </div>
      <div className="w-1/3 relative aspect-square  items-center justify-center  bg-linear-to-br hidden lg:block ">
        <Image
          alt="login image"
          src="/images/login.png"
          fill
          className="absolute  rounded-2xl "
        ></Image>
      </div>
    </div>
  );
}
