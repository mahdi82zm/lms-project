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
import React from "react";

export default function SideBar() {
  return (
    <div className="flex flex-col h-full justify-between items-start mb-4 overflow-auto">
      <div className="mb-4">
        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase">
          Mian
        </div>
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/dashboard"
          label="داشبورد"
          leftSection={<IconHome size={20} />}
        />
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/dashboard"
          label="کاربران"
          leftSection={<IconUser size={20} />}
        />
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/dashboard"
          label="برد"
          leftSection={<IconClipboardData size={20} />}
        />

        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase">
          communications
        </div>
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/inbox"
          label="اینباکس"
          leftSection={<IconInbox size={20} />}
        />
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/chat"
          label="چت"
          leftSection={<IconMessage size={20} />}
        />

        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase">
          pages
        </div>

        <NavLink
          className="rounded-xl"
          component={Link}
          href="/fileManage"
          label="مدیریت فایل"
          leftSection={<IconFolder size={20} />}
        />
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/calendar"
          label="تقویم"
          leftSection={<IconCalendar size={20} />}
        />
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/pricing"
          label="Pricing"
          leftSection={<IconPigMoney size={20} />}
        />
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/invoice"
          label="Invoice"
          leftSection={<IconInvoice size={20} />}
        />
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/documantation"
          label="اسناد"
          leftSection={<IconFile size={20} />}
        />
      </div>


      <div>
        <NavLink
          className="rounded-xl"
          component={Link}
          href="/setting"
          label="تنظیمات"
          leftSection={<IconSettings size={20} />}
        />
      </div>
    </div>
  );
}
