import { Fragment } from "react";
import classes from "./index.module.css";
type Props = {
  title: string;
  actions: React.ReactNode[];
};

const Header = (props: Props) => {
  return (
    <header
      className={
        classes.header + " container flex justify-between align-middle"
      }
    >
      <div className="header__status flex align-middle">
        <h2>{props.title}</h2>
        <div
          className={classes.indicator + " flex align-middle justify-center"}
        >
          0
        </div>
      </div>
      <div className={classes.header__actions}>
        {props.actions.map((el) => el)}
      </div>
    </header>
  );
};

export default Header;
