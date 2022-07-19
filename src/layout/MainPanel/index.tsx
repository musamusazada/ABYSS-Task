import React from "react";
import PanControls from "./PanControls/index";
type Props = {};

const MainPanel = (props: Props) => {
  return (
    <div className="pos-rel h-90vh">
      <PanControls />
    </div>
  );
};

export default MainPanel;
