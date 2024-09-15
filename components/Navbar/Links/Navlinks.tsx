import { DownOutlined } from "@ant-design/icons";
import styles from "./navlinks.module.scss";
import { Dropdown, ConfigProvider, Space } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

interface NavlinkProps {
  title: string;
  path: string;
}

function Navlink({ title, path }: NavlinkProps) {
  return (
    <Link href={path} replace={false}>
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
          label: "Submenu 1-1",
        },
        {
          key: "1-2",
          label: "Submenu 1-2",
        },
      ],
    },
    {
      key: "2",
      label: "Submenu 2",
      children: [
        {
          key: "2-1",
          label: "Submenu 2-1",
        },
        {
          key: "2-2",
          label: "Submenu 2-2",
        },
      ],
    },
    {
      key: "3",
      label: "Submenu 3",
      children: [
        {
          key: "3-1",
          label: "Submenu 3-1",
        },
        {
          key: "3-2",
          label: "Submenu 3-2",
        },
      ],
    },
  ];

  return (
    <ConfigProvider>
      <Dropdown menu={{ items }}>
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Space>
            Our Vision
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </ConfigProvider>
  );
}

export default function Nav() {
  return (
    <div>
      <Navlink title="Home" path="/" />
      <Navlink title="About Us" path="/about" />
      <Navlink title="Contact Us" path="/contact" />
    </div>
  );
}
