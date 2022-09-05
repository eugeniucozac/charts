import { ReactChildren } from "../type";
import { Aside } from "../components/Aside";
import classes from "./PageLayout.styles";

export const PageLayout = ({ children }: ReactChildren) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Aside />
        <div className={classes.layout}>
          <div className={classes.content}>
            <div className={classes.page}>{children}</div>
            <div className={classes.background}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
