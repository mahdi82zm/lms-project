"use client"

import {
  Avatar,
  Burger,
  Button,
  Indicator,
  Input,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
} from "@mantine/core";
import {
  IconBell,
  IconChevronDown,
  IconInputSearch,
  IconLogout,
  IconNotification,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";

interface HeaderProps {
  opend: boolean;
  toggle: () => void;
}

export default function Header({ opend, toggle }: HeaderProps) {
  const [menuOpenen, setIsOpended] = useState<boolean>(false);

  return (
    <div className="w-full h-17.5 border-b border-b-zinc-100 px-4 grid grid-cols-5 items-center justify-between  gap-4">
      <div className=" col-span-1 flex items-center gap-4 ">
        <Burger opened={opend} onClick={toggle} hiddenFrom="sm" size={"sm"} />
      </div>
      <div className=" col-span-2 max-w-md justify-start">
        <Input
          type="search"
          leftSection={<IconSearch size={16} />}
          placeholder="جستجو ..."
        />
      </div>
      <div className="col-span-2 flex items-center justify-end gap-5 ">
        <Indicator color="red" size={8}>
          <IconBell size={20} className="cursor-pointer" />
        </Indicator>

        <Menu shadow="md" width={200} position="bottom-end" opened={menuOpenen}
        
        onChange={setIsOpended}
        >
          <MenuTarget>
            <div className="flex  items-center justify-center gap-4">
              <Avatar
                src="/images/user.png"
                alt="user"
                size="md"
                radius="xl"
                className="cursor-pointer"
              />
              <span className="text-sm font-medium cursor-pointer">Mahdi zabihi</span>
              <IconChevronDown
                size={16}
                className={`transition-transform duration-200 cursor-pointer ${menuOpenen ? "rotate-180" : ""}`}
              />
            </div>
          </MenuTarget>

          <MenuDropdown>
            <MenuLabel>حساب کاربری</MenuLabel>
            <MenuItem leftSection={<IconUser size={16} />}>پروفایل</MenuItem>
            <MenuItem leftSection={<IconSettings size={16} />}>
              تنظیمات
            </MenuItem>
            <MenuDivider />
            <MenuItem color="red" leftSection={<IconLogout size={16} />}>
             
              خروج
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </div>
    </div>
  );
}
