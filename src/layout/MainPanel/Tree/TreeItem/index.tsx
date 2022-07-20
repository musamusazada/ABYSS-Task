import React, { useState, useRef } from "react";
import Button from "../../../../UI/Button/Button";
import { nanoid } from "nanoid";
import {
  plus,
  editIcon,
  deleteIcon,
  acceptIcon,
} from "../../../../icons/index";
type Props = {
  id?: number;
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
  const [title, setTitle] = useState(props.title);
  const [isReadOnly, setIsReadOnly] = useState(props.isReadOnly);
  const [crudActions, setCrudActions] = useState(true);
  const [editActions, setEditActions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleCreate = (): void => {
    const data = props.treeData;
    data.categories.push({
      id: nanoid(),
      title: "",
      color: "orange",
      create: true,
      delete: true,
      update: true,
    });
    props.setTreeData({ ...data });
  };
  const handleUpdate = (): void => {
    setCrudActions(false);
    setEditActions(true);
    setIsReadOnly(false);
    inputRef.current?.focus();
  };

  const handleDelete = (): void => {
    const data = props.treeData;
    const mappedData = data.categories.filter((el: any) => el.id !== props.id);
    data.categories = mappedData;
    props.setTreeData({ ...data });
  };

  const handleAccept = (): void => {
    setCrudActions(true);
    setEditActions(false);
  };
  const handleDiscard = (): void => {
    setTitle(props.title);
    handleAccept();
  };
  return (
    <div className={props.wrapperClass + " flex align-middle"}>
      <input
        ref={inputRef}
        size={title.length + 1}
        type="text"
        className={props.classes}
        readOnly={isReadOnly}
        value={title}
        onChange={handleChange}
        placeholder="Category Name"
      />
      {crudActions && (
        <div>
          {props.create ? (
            <Button
              classes="crud-action"
              content={plus()}
              onClick={handleCreate}
            />
          ) : (
            ""
          )}
          {props.update ? (
            <Button
              classes="crud-action"
              content={editIcon()}
              onClick={handleUpdate}
            />
          ) : (
            ""
          )}
          {props.delete ? (
            <Button
              classes="crud-action"
              content={deleteIcon()}
              onClick={handleDelete}
            />
          ) : (
            ""
          )}
        </div>
      )}
      {editActions && (
        <div>
          <Button
            classes="crud-action"
            content={deleteIcon()}
            onClick={handleDiscard}
          />
          <Button
            classes="crud-action"
            content={acceptIcon()}
            onClick={handleAccept}
          />
        </div>
      )}
    </div>
  );
};

export default TreeItem;
