import Carousel from "./Carousel/Carousel";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import styles from "./ourfocus.module.scss";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function OurFocus() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Our Focus</h1>
        {/* <Carousel /> */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </main>
  );
}
