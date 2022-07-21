import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Select from "../Select";
import useStore from "../../store/index";

type Props = {};

const zoomValues = [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.25, 1.5];

const ZoomController = (props: Props) => {
  const [zoomValue, setZoomValue] = useState(1);
  const setZoom = useStore((state: any) => state.setZoom);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setZoomValue(+val);
    setZoom(val);
  };
  const zoomOut = (): void => {
    const index = zoomValues.indexOf(zoomValue);
    const val = zoomValues[index - 1];
    if (index > 0) {
      setZoomValue(zoomValues[index - 1]);
      setZoom(val);
    }
  };
  const zoomIn = (): void => {
    const index = zoomValues.indexOf(zoomValue);
    const val = zoomValues[index + 1];

    if (index < zoomValues.length - 1) {
      setZoomValue(zoomValues[index + 1]);
      setZoom(val);
    }
  };
  return (
    <div className="flex justify-around">
      <Button content="-" onClick={zoomOut} />
      <Select onChange={handleChange} value={zoomValue} options={zoomValues} />
      <Button content="+" onClick={zoomIn} />
    </div>
  );
};

export default ZoomController;
