import styles from "./landing.module.scss";

export default function Landing() {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/3DWBOwaohFc"
          title="My Village - Cinematic Video | Sigma 30mm 1.4 | Sony a6400"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <h1 className={styles.tagline}>Transforming Village Life</h1>
      </section>
    </main>
  );
}
