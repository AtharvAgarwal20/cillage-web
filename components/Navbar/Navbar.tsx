"use client";

import Observer from "gsap/dist/Observer";

import styles from "./navbar.module.scss";

import Nav from "./Links/Navlinks";
import DonateBtn from "./DonateBtn/DonateBtn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LegacyRef, RefObject, useRef } from "react";

gsap.registerPlugin(Observer);

export default function Navbar() {
  const navRef: any = useRef();
  useGSAP(
    () => {
      const moveNavInY = (value: number) => {
        gsap.to(navRef.current, {
          yPercent: value,
          duration: 0.5,
          ease: "none",
        });
      };

      Observer.create({
        target: window,
        type: "scroll",
        onDown: (self) => {
          moveNavInY(-200);
        },
        onUp: (self) => {
          moveNavInY(0);
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <nav className={styles.navbar} ref={navRef}>
      <img
        src="/Images/CillageLogo_Text.svg"
        alt="cillage logo"
        className={styles.logo}
      />
      <Nav />
      <DonateBtn />
    </nav>
  );
}
