"use client";

import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";

interface CardProps {
  heading: string;
  image: any;
  path: string;
  desc: string;
  style: any;
}

export default function Card({
  heading,
  image,
  desc,
  path,
  style = {},
}: CardProps) {
  return (
    <Link href={path} replace={false} className={styles.card} style={style}>
      <Image src={image} alt="icon" />
      <h2>{heading}</h2>
      <p>{desc}</p>
    </Link>
  );
}
