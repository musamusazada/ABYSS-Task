import { useState, useEffect, useRef } from "react";
import { randomColor } from "../../../../utils/util";
import Button from "../../../../UI/Button/Button";
import {
  plus,
  editIcon,
  deleteIcon,
  acceptIcon,
} from "../../../../icons/index";
import { nanoid, random } from "nanoid";
type Props = {
  id: string;
  color: string;
  title: string;
  isReadOnly: boolean;
  classes?: string;
  create: boolean;
  update?: boolean;
  delete?: boolean;
  triggerDelete?: (id: string) => void;
};

const BranchItem = (props: Props) => {
  const [data, setData] = useState<string[]>([]);
  const [title, setTitle] = useState(props.title);
  const [prevTitle, setPrevTitle] = useState(title);
  const [isReadOnly, setIsReadOnly] = useState(props.isReadOnly);
  const [crudActions, setCrudActions] = useState(true);
  const [editActions, setEditActions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef(randomColor());
  useEffect(() => {
    inputRef.current?.focus();
    if (!isReadOnly) {
      setCrudActions(false);
      setEditActions(true);
    }
  }, []);

  const handleCreate = () => {
    setData((prev) => [...prev, nanoid()]);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
    setPrevTitle(value);
  };
  const handleAccept = (): void => {
    setIsReadOnly(true);
    setCrudActions(true);
    setEditActions(false);
  };
  const handleDiscard = (): void => {
    setTitle(prevTitle);
    handleAccept();
  };

  const triggerDelete = (id: string) => {
    const mutate = data.filter((el) => el !== id);
    setData(mutate);
  };

  const handleDelete = (): void => {
    if (props.triggerDelete) {
      props.triggerDelete(props.id);
    }
  };

  const handleUpdate = (): void => {
    setCrudActions(false);
    setIsReadOnly(false);
    setEditActions(true);
    inputRef.current?.focus();
  };
  return (
    <div className="tree__item flex column">
      <div className="flex">
        <input
          ref={inputRef}
          size={title.length === 0 ? 10 : title.length + 1}
          type="text"
          className={!isReadOnly ? " edit-input" : " " + props.classes}
          readOnly={isReadOnly}
          value={title}
          onChange={handleChange}
          placeholder="Category Name"
          style={{ backgroundColor: props.color }}
        />
        {crudActions && (
          <div className="flex align-middle">
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
          <div className="flex align-middle">
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
      <div className="tree__item--wrapper flex ">
        {data.map((el) => (
          <BranchItem
            key={el}
            id={el}
            title=""
            classes={"solid "}
            isReadOnly={false}
            create={true}
            update={true}
            delete={true}
            triggerDelete={triggerDelete}
            color={colorRef.current}
          />
        ))}
      </div>
    </div>
  );
};

export default BranchItem;
