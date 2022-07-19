import React from "react";
import classes from "./index.module.css";
type Props = {
  options: number[];
};

const Select: React.FC<Props> = ({ options }) => {
  return (
    <select className={classes.select__box}>
      {options.map((el) => (
        <option value={el}>{el * 100}%</option>
      ))}
    </select>
  );
};

export default Select;
