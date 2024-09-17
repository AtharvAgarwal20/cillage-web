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
  isHidden: boolean;
}

export default function Card({
  heading,
  image,
  desc,
  path,
  isActive,
  isHidden,
}: CardProps) {
  return (
    <Link
      href={path}
      replace={false}
      className={
        isActive
          ? `${styles.active} ${styles.card}`
          : isHidden
          ? `${styles.hidden} ${styles.card}`
          : `${styles.card}`
      }
    >
      <Image src={image} alt="icon" />
      <h2>{heading}</h2>
      <p>{desc}</p>
    </Link>
  );
}
