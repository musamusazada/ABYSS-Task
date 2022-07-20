import { useEffect, useState } from "react";

import classes from "./index.module.css";
import TreeItem from "./TreeItem";
type Props = {};

interface TreeItemType {
  id: number;
  title: string;
  isSub: boolean;
  color: string;
  isReadOnly: boolean;
  children: [];
  create: boolean;
  update: boolean;
  delete: boolean;
}

const Tree: React.FC<Props> = (props: Props) => {
  //Updating positions to trigger render
  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);

  //Tree Data
  const [treeData, setTreeData] = useState({
    title: "Categories",
    isReadOnly: true,
    isSub: false,
    color: "#fff",
    create: true,
    children: [],
    categories: [],
  });

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
      className={classes.tree + " tree flex column align-middle  gap-40"}
    >
      <div className="tree__item--wrapper">
        <TreeItem
          treeData={treeData}
          setTreeData={setTreeData}
          isSub={treeData.isSub}
          title={treeData.title}
          color={treeData.color}
          classes={classes.dashed}
          isReadOnly={treeData.isReadOnly}
          create={treeData.create}
          children={[]}
          wrapperClass={treeData.categories.length > 0 ? "justify-center" : ""}
        />

        {treeData.categories?.length > 0 ? (
          <div className="tree__item--wrapper flex ">
            {treeData.categories.map((el: TreeItemType) => (
              <TreeItem
                treeData={treeData}
                setTreeData={setTreeData}
                key={el.id}
                classes={"solid " + el.color}
                wrapperClass="tree__item"
                {...el}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tree;
