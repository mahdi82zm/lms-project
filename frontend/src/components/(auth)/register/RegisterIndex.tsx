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

import {
  IconCheck,
  IconLoader,
  IconLock,
  IconMail,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { notifications } from "@mantine/notifications";
export default function RegisterIndex() {
  const [loading, setIsLoading] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [erorr, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== confirmPassword) {
      notifications.show({
        title: "خطا",
        message: "رمز  عبور  و نام کاربری یکسان نیستند  ",
        color: "red",
        icon: <IconX size={18} />,
        position: "top-center",
      });
      return;
    }
    notifications.show({
      title: "موفق",
      message: "ثبت‌نام با موفقیت انجام شد",
      color: "green",
      icon: <IconCheck size={18} />,
      withCloseButton: true,
    });
  };

  return (
    <div className="flex w-screen min-h-screen items-center justify-center gap-10 ">
      <div className="lg:w-1/2 h-full flex items-center justify-center  p-8">
        <form onSubmit={handleSubmit} className="w-1/2" dir="rtl">
          <Card padding="xl" radius="md" className=" w-full  max-w-md">
            <Stack>
              <Group justify="center" align="center">
                <Title order={2}>ساخت حساب کاربری </Title>
                <Badge color="blue" variant="light">
                  نسخه جدید
                </Badge>
              </Group>
              <Stack>
                <TextInput
                  placeholder="نام کاربری  را وارد کنید "
                  label="نام کاربری :"
                />
              </Stack>
              <Stack>
                <TextInput
                  type="email"
                  label="email"
                  placeholder="your@email.com"
                  leftSection={<IconMail size={16} />}
                  required
                />
              </Stack>
              <Stack>
                <PasswordInput
                  leftSection={<IconLock size={16} />}
                  placeholder="رمز عبور  خودرا وارد کنید "
                  label="رمز عبور :"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Stack>
              <Stack>
                <PasswordInput
                  leftSection={<IconLock size={16} />}
                  placeholder="رمز عبور  خودرا وارد کنید "
                  label=" تکرار رمز عبور :"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  error={erorr}
                  mt="md"
                />
              </Stack>
              <Group>
                <Checkbox />
                <Text size="sm">مرا به خاطر بسپار </Text>
              </Group>
              <Button
                variant="gradient"
                gradient={{ from: "blue", to: "purple" }}
                size="md"
                fullWidth
                mt="md"
                type="submit"
              >
                {loading ? <IconLoader className="animate-spin" /> : "ثبت نام"}
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
              </Link>{" "}
              <Link href="#" dir="rtl">
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
