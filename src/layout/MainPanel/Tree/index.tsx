import { useEffect, useRef } from "react";
import Button from "../../../UI/Button/Button";
import { plus } from "../../../icons/index";
import classes from "./index.module.css";
type Props = {
  title: string;
};

const Tree: React.FC<Props> = (props: Props) => {
  const treeRef = useRef(null);

  return (
    <div ref={treeRef} className={classes.tree + " tree flex align-middle"}>
      <p>{props.title}</p>
      <Button classes="crud-action" content={plus()} />
    </div>
  );
};

export default Tree;
