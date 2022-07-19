import React from "react";
import PanControls from "./PanControls/index";
import Tree from "./Tree";
type Props = {};

const MainPanel = (props: Props) => {
  return (
    <div className="panel pos-rel h-90vh">
      <PanControls />
      <Tree title="Categories" />
    </div>
  );
};

export default MainPanel;
