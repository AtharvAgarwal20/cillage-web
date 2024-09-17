import styles from "./landing.module.scss";

export default function Landing() {
  return (
    <main className={styles.container}>
      <p className={styles.caption}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        dicta reprehenderit, porro, quos quam modi perferendis consequatur
        libero odio facilis corporis voluptatibus velit vel minus soluta animi,
        repellat in accusantium. Porro soluta molestias placeat, esse provident
        cum! Dignissimos ratione ipsam veniam assumenda enim eos consequatur
        dolorem iure natus illum esse, molestiae incidunt praesentium itaque
        doloribus cumque. Praesentium assumenda fugiat itaque. Rerum, pariatur
        laborum corporis fuga reprehenderit, amet aperiam autem id fugit at quo,
        aliquid reiciendis odit facere eos. Maxime dolor tempore itaque alias
        numquam accusamus autem blanditiis aliquam laboriosam natus? Eum officia
        recusandae quia iste, vel impedit nisi hic culpa adipisci nostrum itaque
        blanditiis dolorum sint explicabo, eaque veritatis quaerat ad magni
        perferendis suscipit voluptas saepe aut provident perspiciatis! Vero!
        Earum suscipit alias optio ullam corporis sit autem laboriosam nesciunt
        iure amet aperiam libero provident sunt accusantium consequuntur nostrum
        laborum distinctio recusandae quia, possimus facere porro qui mollitia?
        Aliquid, nobis.
      </p>
      <section className={styles.videoContent}>
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
