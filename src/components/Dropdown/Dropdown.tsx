/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef, useEffect } from "react";
import { Button } from "../Button";
import classes from "./Dropdown.styles";

export const Dropdown = ({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLButtonElement;
    if (ref.current && !ref.current.contains(target)) {
      setActive(false);
    }
  };

  const currentLabel = options.find(
    (item: { value: string; label: string }) => item.value === value
  );
  const selectOption = (value: string) => {
    onChange(value);
    setActive(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={classes.wrapper} ref={ref}>
      <Button onClick={() => setActive(!active)}>{currentLabel?.label}</Button>
      {active && (
        <ul className={classes.list}>
          {options.map((item: { value: string; label: string }) => (
            <li>
              <a
                className={classes.item}
                onClick={() => selectOption(item.value)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
