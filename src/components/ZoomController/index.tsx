import Button from "../../UI/Button/Button";
import Select from "../Select";

type Props = {};

const zoomValues = [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.25, 1.5];

const ZoomController = (props: Props) => {
  return (
    <div className="flex justify-around">
      <Button content="-" onClick={() => console.log("minus")} />
      <Select options={zoomValues} />
      <Button content="+" onClick={() => console.log("plus")} />
    </div>
  );
};

export default ZoomController;
