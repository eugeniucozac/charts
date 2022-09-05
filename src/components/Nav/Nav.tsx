import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import classes from "./Nav.styles";
import { SVGProps } from "react";

export const Nav = () => {
  const menu = [
    {
      root: "/",
      name: "Dashboard",
      icon: faHouseUser,
    },
    {
      root: "/sales",
      name: "Sales",
      icon: faChartSimple,
    },
  ];

  return (
    <ul className={classes.wrapper}>
      {menu.map((item: { root: string; name: string; icon: any }) => {
        return (
          <li className={classes.menu}>
            <NavLink
              to={item.root}
              className={(navData) =>
                classes.link + " " + (navData.isActive ? classes.active : "")
              }
            >
              <FontAwesomeIcon icon={item.icon} className={classes.icon} />
              <div>{item.name}</div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
