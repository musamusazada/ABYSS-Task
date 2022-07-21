import { nanoid } from "nanoid";
import { useState } from "react";
import BranchItem from "../BrancItem";

type Props = {};

const BranchWrapper = (props: Props) => {
  return (
    <div className="tree__item--wrapper flex column ">
      <div className="tree__item flex column">
        <div className="flex justify-center">
          <BranchItem
            title="Categories"
            isReadOnly={true}
            classes="dashed"
            color="orange"
            id={nanoid()}
            create={true}
          />
        </div>
      </div>
    </div>
  );
};

export default BranchWrapper;
