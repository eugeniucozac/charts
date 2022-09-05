import { Logo } from "../Logo";
import { Nav } from "../Nav";
import classes from "./Aside.styles";

export const Aside = () => {
  return (
    <aside className={classes.wrapper}>
      <Logo />
      <Nav />
    </aside>
  );
};
