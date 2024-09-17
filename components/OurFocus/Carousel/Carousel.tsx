"use client";

import { OUR_FOCUS_LIST } from "@/data/OurFocus";
import styles from "./carousel.module.scss";
import arrow from "@/assets/CarouselIcons/arrow.svg";

import Card from "./Card/Card";

import Image from "next/image";
import { useState } from "react";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((prev) => {
      if (prev === 0) {
        return OUR_FOCUS_LIST.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const next = () => {
    setActiveIndex((prev) => {
      if (prev === OUR_FOCUS_LIST.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const CarouselCards = OUR_FOCUS_LIST.map(
    ({ image, heading, desc, path }, index) => {
      return (
        <Card
          key={heading}
          image={image}
          heading={heading}
          desc={desc}
          path={path}
          isActive={index === activeIndex}
          isHidden={
            !(
              index >= activeIndex - 1 &&
              index <= activeIndex + 1 &&
              (activeIndex !== 0 || activeIndex !== OUR_FOCUS_LIST.length - 1)
            )
          }
        />
      );
    }
  );

  return (
    <section className={styles.carouselContainer}>
      <Image
        className={`${styles.arrow} ${styles.left}`}
        src={arrow}
        alt="left arrow"
        onClick={previous}
      />
      {CarouselCards}
      <Image
        className={`${styles.arrow} ${styles.right}`}
        src={arrow}
        alt="right arrow"
        onClick={next}
      />
    </section>
  );
}
