"use client";

import { NavLink } from "@mantine/core";
import {
  IconCalendar,
  IconClipboardData,
  IconFile,
  IconFolder,
  IconHome,
  IconInbox,
  IconInvoice,
  IconMessage,
  IconPigMoney,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

export default function SideBar() {
  const [open, setIsOpen] = useState<number>();

  const mainItem = [
    {
      id: 1,
      ref: "/dashboard",
      label: "داشبورد",
      icon: <IconHome size={20} />,
    },
    {
      id: 2,
      ref: "/dashboard",
      label: "کاربران",
      icon: <IconUser size={20} />,
    },
    {
      id: 3,
      ref: "/dashboard",
      label: "برد",
      icon: <IconClipboardData size={20} />,
    },
    {
      id: 4,
      ref: "/inbox",
      label: "اینباکس",
      icon: <IconInbox size={20} />,
    },
    {
      id: 5,
      ref: "/chat",
      label: "چت",
      icon: <IconMessage size={20} />,
    },
    {
      id: 6,
      ref: "/pricing",
      label: "Pricing",
      icon: <IconPigMoney size={20} />,
    },
    {
      id: 7,
      ref: "/calendar",
      label: "تقویم",
      icon: <IconCalendar size={20} />,
    },
    {
      id: 8,
      ref: "/invoice",
      label: "Invoice",
      icon: <IconInvoice size={20} />,
    },
    {
      id: 9,
      ref: "/documantation",
      label: "اسناد",
      icon: <IconFile size={20} />,
    },
    {
      id: 10,
      ref: "/setting",
      label: "تنظیمات",
      icon: <IconSettings size={20} />,
    },
  ];

  return (
    <div className="flex flex-col h-full justify-between items-start mb-4 overflow-auto">
      <div className="mb-4 flex flex-col items-start justify-between w-full">
        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase">
          Mian
        </div>
        {mainItem.slice(0, 3).map((item) => (
          <NavLink
            key={item.id}
            className="rounded-xl"
            component={Link}
            href={item.ref}
            label={item.label}
            leftSection={item.icon}
            onClick={() => setIsOpen(item.id)}
            bg={open === item.id ? "blue" : ""}
            c={open === item.id ? "white" : ""}
            variant="light"
            
          />
        ))}

        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase">
          communications
        </div>
        {mainItem.slice(3, 5).map((item) => (
          <NavLink
            key={item.id}
            className="rounded-xl"
            component={Link}
            href={item.ref}
            label={item.label}
            leftSection={item.icon}
            onClick={() => setIsOpen(item.id)}
            bg={open === item.id ? "blue" : ""}
            c={open === item.id ? "white" : ""}
            variant="light"
          />
        ))}

        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase">
          pages
        </div>

        {mainItem.slice(5, 10).map((item) => (
          <NavLink
            key={item.id}
            className="rounded-xl"
            component={Link}
            href={item.ref}
            label={item.label}
            leftSection={item.icon}
            onClick={() => setIsOpen(item.id)}
            bg={open === item.id ? "blue" : ""}
            c={open === item.id ? "white" : ""}
            variant="light"
          />
        ))}
      </div>
    </div>
  );
}
