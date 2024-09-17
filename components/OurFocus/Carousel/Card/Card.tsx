"use client";

import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";

interface CardProps {
  heading: string;
  image: any;
  path: string;
  desc: string;
  isActive: boolean;
  style: any;
}

export default function Card({
  heading,
  image,
  desc,
  path,
  isActive,
  style = {},
}: CardProps) {
  return (
    <Link
      href={path}
      replace={false}
      className={
        isActive ? `${styles.active} ${styles.card}` : `${styles.card}`
      }
      style={style}
    >
      <Image src={image} alt="icon" />
      <h2>{heading}</h2>
      <p>{desc}</p>
    </Link>
  );
}
