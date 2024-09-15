"use client";

import styles from "./floatingIcons.module.scss";
import whatsappLogo from "@/assets/Images/WhatsappLogo.svg";
import searchLogo from "@/assets/Images/SearchLogo.svg";

import Image from "next/image";
import { useSearchCtx } from "@/store/search-ctx";

export default function FloatingIcons() {
  const ctx = useSearchCtx();

  return (
    <>
      <Image
        src={whatsappLogo}
        alt="whatsapp icon"
        className={`${styles.floatingIcons} ${styles.whatsapp}`}
      />
      <Image
        src={searchLogo}
        alt="search icon"
        className={`${styles.floatingIcons} ${styles.search}`}
      />
    </>
  );
}
