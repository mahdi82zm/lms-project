"use client";

import React, { useState } from "react";
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

import { IconLoader } from "@tabler/icons-react";
import Link from "next/link";

export default function LoginIndex() {
  const [loading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = () => {};

  return (
    <div className="flex w-screen min-h-screen items-center justify-center gap-10 ">
      <div className="lg:w-1/2 h-full flex items-center justify-center  p-8">
        <form onSubmit={handleSubmit} className="w-1/2 " dir="rtl">
          {" "}
          <Card padding="xl" radius="md" className=" w-full ">
            <Stack>
              <Group justify="center" align="center">
                <Title order={2}>ورود به سیستم </Title>
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
                <PasswordInput
                  placeholder="رمز عبور  خودرا وارد کنید "
                  label="رمز عبور :"
                />
              </Stack>

              <Group>
                <Checkbox />
                <Text size="sm">مرا به خاطر بسپار </Text>
              </Group>

              <Button
                onClick={() => setIsLoading(true)}
                variant="gradient"
                gradient={{ from: "blue", to: "purple" }}
                size="md"
                fullWidth
                mt="md"
                type="submit"
              >
                {loading ? (
                  <IconLoader className="animate-spin" />
                ) : (
                  "ورود به حساب کاربری"
                )}
              </Button>

              <Link
                href="/register"
                className=" rounded-2xl hover:text-blue-500"
                aria-placeholder="pshf "
              >
                حساب کاربری ندارید ؟ ثبت نام کنید
              </Link>
              <Link
                href="/forget-password  "
                className="  rounded-2xl hover:text-blue-500"
                aria-placeholder="pshf "
              >
                فزاموشی رمز عبور؟
              </Link>

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
