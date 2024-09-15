"use client";

import styles from "./navlinks.module.scss";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, ConfigProvider } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

interface NavlinkProps {
  title: string;
  path: string;
}

function Navlink({ title, path }: NavlinkProps) {
  return (
    <Link href={path} replace={false} className={styles.link}>
      {title}
    </Link>
  );
}

function DropdownLink() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Submenu 1",
      children: [
        {
          key: "1-1",
          label: (
            <Link href="/submenu1/1" replace={false}>
              Submenu 1-1
            </Link>
          ),
        },
        {
          key: "1-2",
          label: (
            <Link href="/submenu1/2" replace={false}>
              Submenu 1-2
            </Link>
          ),
        },
      ],
    },
    {
      key: "2",
      label: "Submenu 2",
      children: [
        {
          key: "2-1",
          label: (
            <Link href="/submenu2/1" replace={false}>
              Submenu 2-1
            </Link>
          ),
        },
        {
          key: "2-2",
          label: (
            <Link href="/submenu2/2" replace={false}>
              Submenu 2-2
            </Link>
          ),
        },
      ],
    },
    {
      key: "3",
      label: "Submenu 3",
      children: [
        {
          key: "3-1",
          label: (
            <Link href="/submenu3/1" replace={false}>
              Submenu 3-1
            </Link>
          ),
        },
        {
          key: "3-2",
          label: (
            <Link href="/submenu3/2" replace={false}>
              Submenu 3-2
            </Link>
          ),
        },
      ],
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          controlItemBgHover: "rgba(224, 150, 30, 0.5)",
        },
      }}
    >
      <Dropdown menu={{ items }}>
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles.space}>
            Our Vision
            <DownOutlined />
          </div>
        </a>
      </Dropdown>
    </ConfigProvider>
  );
}

export default function Nav() {
  return (
    <div className={styles.linkContainer}>
      <Navlink title="Home" path="/" />
      <Navlink title="About Us" path="/about" />
      <Navlink title="Contact Us" path="/contact" />
      <DropdownLink />
    </div>
  );
}
