// import styles from "./page.module.scss";

import FloatingIcons from "@/components/FloatingIcons/FloatingIcons";
import Landing from "@/components/Landing/Landing";
import { SearchProvider } from "@/store/search-ctx";

export default function Home() {
  return (
    <>
      <main>
        <Landing />
      </main>
      <SearchProvider>
        <FloatingIcons />
      </SearchProvider>
    </>
  );
}
