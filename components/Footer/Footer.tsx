import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <h3>Who We Are?</h3>
          <ul>
            <li>
              <Link replace={false} href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link replace={false} href="/why-villages">
                Why Villages
              </Link>
            </li>
            <li>
              <Link replace={false} href="/our-impact">
                Our Impact
              </Link>
            </li>
            <li>
              <Link replace={false} href="/our-approach">
                Our Approach
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h3>What We Do?</h3>
          <ul>
            <li>
              <Link href="/what-we-do/clean-water" replace={false}>
                Clean Water
              </Link>
            </li>
            <li>
              <Link href="/what-we-do/waste-water-treatment" replace={false}>
                Waste Water Treatment
              </Link>
            </li>
            <li>
              <Link href="/what-we-do/solid-waste-management" replace={false}>
                Bio-Degradable Solid Waste Management
              </Link>
            </li>
            <li>
              <Link href="/what-we-do/sewage-sludge-management" replace={false}>
                Sewage Sludge Management
              </Link>
            </li>
            <li>
              <Link href="/what-we-do/solar-power" replace={false}>
                Solar Power Technologies
              </Link>
            </li>
            <li>
              <Link href="/what-we-do/organic-farming" replace={false}>
                Technologies For Organic Farming
              </Link>
            </li>
            <li>
              <Link href="/what-we-do/food-processing" replace={false}>
                Food Processing Technologies
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h3>Get Involved</h3>
          <ul>
            <li>
              <Link href="/volunteering-and-interships" replace={false}>
                Volunteering and Internships
              </Link>
            </li>
            <li>
              <Link href="/corporate-partners" replace={false}>
                Corporate Partners
              </Link>
            </li>
            <li>
              <Link href="/careers" replace={false}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
