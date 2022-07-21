import { nanoid } from "nanoid";
import React from "react";
import classes from "./index.module.css";
type Props = {
  options: number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: number;
};

const Select: React.FC<Props> = ({ options, onChange, value }) => {
  return (
    <select
      className={classes.select__box}
      onChange={onChange}
      defaultValue={value}
      value={value}
    >
      {options.map((el) => (
        <option key={nanoid()} value={el}>
          {el * 100}%
        </option>
      ))}
    </select>
  );
};

export default Select;
