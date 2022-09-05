import { ReactNode } from "react";
import classes from "./Card.styles";

export const Card = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h5 className={classes.title}>{title}</h5>
        {children}
      </div>
    </div>
  );
};
