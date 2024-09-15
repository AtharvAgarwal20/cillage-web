import styles from "./navbar.module.scss";

import Nav from "./Links/Navlinks";
import DonateBtn from "./DonateBtn/DonateBtn";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
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
