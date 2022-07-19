import { useState } from "react";
import Button from "../../../../UI/Button/Button";
import { plus, editIcon, deleteIcon } from "../../../../icons/index";
type Props = {
  title: string;
  classes?: string;
  wrapperClass?: string;
  isReadOnly: boolean;
  create?: boolean;
  update?: boolean;
  delete?: boolean;
  treeData: any;
  setTreeData: any;
};

const TreeItem: React.FC<Props> = (props: Props) => {
  const [isReadOnly, setIsReadOnly] = useState(props.isReadOnly);

  const handleCreate = (): void => {
    console.log("hi");
    const data = props.treeData;
    data.categories.push({
      title: "Hi",
      color: "orange",
      create: true,
    });
    console.log(data);
    props.setTreeData({ ...data });
  };

  return (
    <div className={props.wrapperClass + " flex align-middle"}>
      <input
        size={props.title.length + 1}
        type="text"
        className={props.classes}
        readOnly={isReadOnly}
        value={props.title}
      />

      {props.create ? (
        <Button classes="crud-action" content={plus()} onClick={handleCreate} />
      ) : (
        ""
      )}
      {props.update ? (
        <Button classes="crud-action" content={editIcon()} />
      ) : (
        ""
      )}
      {props.delete ? (
        <Button classes="crud-action" content={deleteIcon()} />
      ) : (
        ""
      )}
    </div>
  );
};

export default TreeItem;
