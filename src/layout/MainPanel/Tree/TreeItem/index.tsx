import React, { useState, useRef, useEffect, Fragment } from "react";
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
  color: string;
  isSub: boolean;
  children: [];
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

  useEffect(() => {
    inputRef.current?.focus();
    if (!isReadOnly) {
      setCrudActions(false);
      setEditActions(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleCreate = (): void => {
    const data = props.treeData;
    if (!props.isSub) {
      data.categories.push({
        id: nanoid(),
        title: "",
        isSub: true,
        color: "orange",
        isReadOnly: false,
        create: true,
        delete: true,
        update: true,
        children: [],
      });
    } else {
      const el = data.categories.find((el: any) => el.id === props.id);
      el.children.push({
        id: nanoid(),
        title: "",
        isSub: true,
        color: "orange",
        isReadOnly: false,
        create: true,
        delete: true,
        update: true,
        children: [],
      });
    }

    props.setTreeData({ ...data });
  };
  const handleUpdate = (): void => {
    setCrudActions(false);
    setIsReadOnly(false);
    setEditActions(true);
    inputRef.current?.focus();
  };

  const handleDelete = (): void => {
    const data = props.treeData;
    const mappedData = data.categories.filter((el: any) => el.id !== props.id);
    data.categories = mappedData;
    props.setTreeData({ ...data });
  };

  const handleAccept = (): void => {
    setIsReadOnly(true);
    setCrudActions(true);
    setEditActions(false);
  };
  const handleDiscard = (): void => {
    setTitle(props.title);
    handleAccept();
  };
  return (
    <div
      className={
        props.children?.length > 0
          ? " tree__item  flex column align-middle "
          : props.wrapperClass + " flex align-middle"
      }
    >
      <div className="flex">
        {" "}
        <input
          ref={inputRef}
          size={title.length === 0 ? 10 : title.length + 1}
          type="text"
          className={!isReadOnly ? " edit-input" : " " + " " + props.classes}
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

      <br />
      <div className=" flex align-middle ">
        {props.children?.length > 0 &&
          props.children.map((el: any) => (
            <TreeItem
              treeData={props.treeData}
              setTreeData={props.setTreeData}
              key={el.id}
              classes={"solid " + props.color}
              wrapperClass="tree__item  "
              {...el}
            />
          ))}
      </div>
    </div>
  );
};

export default TreeItem;
