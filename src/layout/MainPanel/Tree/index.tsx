import { useEffect, useState } from "react";
import Button from "../../../UI/Button/Button";
import { plus } from "../../../icons/index";
import classes from "./index.module.css";
type Props = {
  title: string;
};

const Tree: React.FC<Props> = (props: Props) => {
  //Updating positions to trigger render
  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);

  useEffect(() => {
    //Whole panel element
    const panel = document.querySelector<HTMLElement>(".panel");
    //Whole working tree
    const tree = document.querySelector<HTMLElement>(".tree") as HTMLElement;

    //Triggering Mouse Move and updating position
    const handleMouseDown = () => {
      panel?.addEventListener("mousemove", handleMove);
    };
    const handleMove = ({ movementX, movementY }: any) => {
      const style = window.getComputedStyle(tree);
      let left = parseInt(style.left) + movementX;
      let top = parseInt(style.top) + movementY;
      if (top <= 35) top = 35;
      if (left <= 70) left = 70;
      setLeftPos(left);
      setTopPos(top);
    };
    tree?.addEventListener("mousedown", handleMouseDown);
    window?.addEventListener("mouseup", () => {
      panel?.removeEventListener("mousemove", handleMove);
    });
    //Cleanup
    return () => {
      tree?.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return (
    <div
      style={{
        left: leftPos ? leftPos + "px" : "50%",
        top: topPos ? topPos + "px" : "50%",
      }}
      className={classes.tree + " tree flex align-middle"}
    >
      <p>{props.title}</p>
      <Button classes="crud-action" content={plus()} />
    </div>
  );
};

export default Tree;
