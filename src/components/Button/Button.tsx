import { ReactNode } from "react";
import classes from "./Button.styles";

export const Button = ({
  children,
  dropdown = true,
  onClick,
}: {
  children: ReactNode;
  dropdown?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${classes.wrapper} ${dropdown && classes.after}`}
    >
      {children}
    </button>
  );
};
