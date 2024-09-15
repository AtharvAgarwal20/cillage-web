import Carousel from "./Carousel/Carousel";
import styles from "./ourfocus.module.scss";

export default function OurFocus() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Our Focus</h1>
        <Carousel />
      </div>
    </main>
  );
}
