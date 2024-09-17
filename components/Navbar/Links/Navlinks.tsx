"use client";

import styles from "./navlinks.module.scss";

import { Dropdown, ConfigProvider } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

import { WhoWeAreItems } from "./LinkMenuItems";
import { WhatWeDoItems } from "./LinkMenuItems";
import { GetInvolvedItems } from "./LinkMenuItems";

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

interface DropdownLinkProps {
  title: string;
  items: MenuProps["items"];
}

function DropdownLink({ title, items }: DropdownLinkProps) {
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
          className={styles.space}
        >
          {title}
        </a>
      </Dropdown>
    </ConfigProvider>
  );
}

export default function Nav() {
  return (
    <div className={styles.linkContainer}>
      <Navlink title="Home" path="/" />
      <DropdownLink items={WhoWeAreItems} title="Who We Are?" />
      <DropdownLink items={WhatWeDoItems} title="What We Do?" />
      <DropdownLink items={GetInvolvedItems} title="Get Involved" />
    </div>
  );
}
