// import styles from "./page.module.scss";

import FloatingIcons from "@/components/FloatingIcons/FloatingIcons";
import Landing from "@/components/Landing/Landing";
import OurFocus from "@/components/OurFocus/OurFocus";
import { SearchProvider } from "@/store/search-ctx";

export default function Home() {
  return (
    <>
      <main>
        <Landing />
        <OurFocus />
      </main>
      <SearchProvider>
        <FloatingIcons />
      </SearchProvider>
    </>
  );
}
