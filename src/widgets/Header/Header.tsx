import AppLink from "@/shared/ui/AppLink/AppLink";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <AppLink to={"/"}>Все котики</AppLink>
        <AppLink to={"/favourites"}>Любимые котики</AppLink>
      </nav>
    </header>
  );
};

export default Header;