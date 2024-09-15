import styles from "./carousel.module.scss";

import Card from "./Card/Card";

import icon from "@/assets/CarouselIcons/hugeicons_eco-energy.svg";

export default function Carousel() {
  return (
    <section className={styles.carouselContainer}>
      <Card
        image={icon}
        heading="Clean Energy"
        desc="Providing clean and renewable energy to villages"
        path="/clean-energy"
        style={{
          scale: 0.8,
        }}
      />
      <Card
        image={icon}
        heading="Clean Energy"
        desc="Providing clean and renewable energy to villages"
        path="/clean-energy"
        style={{}}
      />
      <Card
        image={icon}
        heading="Clean Energy"
        desc="Providing clean and renewable energy to villages"
        path="/clean-energy"
        style={{
          scale: 0.8,
        }}
      />
    </section>
  );
}
