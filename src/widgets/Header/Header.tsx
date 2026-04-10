import AppLink from "@/shared/ui/AppLink/AppLink";
import { FC } from "react";
import styles from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <AppLink className={({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.link}`} to={"/"}>Все котики</AppLink>
        <AppLink className={({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.link}`} to={"/favourites"}>Любимые котики</AppLink>
      </nav>
    </header>
  );
};

export default Header;