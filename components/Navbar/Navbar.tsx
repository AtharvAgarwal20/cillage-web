"use client";

import Observer from "gsap/dist/Observer";

import styles from "./navbar.module.scss";

import Nav from "./Links/Navlinks";
import DonateBtn from "./DonateBtn/DonateBtn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(Observer);

export default function Navbar() {
  const navRef: any = useRef();
  useGSAP(
    () => {
      const moveNavInY = (value: number) => {
        gsap.to(navRef.current, {
          yPercent: value,
          duration: 0.2,
          ease: "none",
        });
      };

      Observer.create({
        target: window,
        type: "scroll",
        onDown: (self) => {
          moveNavInY(-100);
        },
        onUp: (self) => {
          moveNavInY(0);
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <div className={styles.navbarContainer} ref={navRef}>
      <nav className={styles.navbar}>
        <img
          src="/Images/CillageLogo_Text.svg"
          alt="cillage logo"
          className={styles.logo}
        />
        <Nav />
        <DonateBtn />
      </nav>
    </div>
  );
}
