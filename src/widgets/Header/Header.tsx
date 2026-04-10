import AppLink from "@/shared/ui/AppLink/AppLink";
import { FC } from "react";
import styles from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.nav}>
        <AppLink className={styles.link} to={"/"}>Все котики</AppLink>
        <AppLink className={styles.link} to={"/favourites"}>Любимые котики</AppLink>
      </nav>
    </header>
  );
};

export default Header;