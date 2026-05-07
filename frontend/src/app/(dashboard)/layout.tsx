"use client";

import "@mantine/core/styles.css";
import {
  MantineProvider,
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellMain,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../globals.css";
import SideBar from "@/components/(dashboard)/SideBar";
import Header from "@/components/(dashboard)/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opended, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opended },
      }}
      padding="md"
    >
      <AppShellHeader>
        <Header opend={opended} toggle={toggle} />
      </AppShellHeader>

      <AppShellNavbar p="md">
        <SideBar />
      </AppShellNavbar>

      <AppShellMain className="bg-[#F4F7FC]">{children}</AppShellMain>
    </AppShell>
  );
}
