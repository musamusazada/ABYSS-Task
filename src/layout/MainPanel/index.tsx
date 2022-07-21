import React from "react";
import PanControls from "./PanControls/index";
import BTree from "./B-Tree";
type Props = {};

const MainPanel = (props: Props) => {
  return (
    <div className="panel pos-rel h-90vh">
      <PanControls />
      <BTree />
    </div>
  );
};

export default MainPanel;
