import { Fragment } from "react";
import Button from "../../../UI/Button/Button";
import {
  rightArrow,
  leftArrow,
  upArrow,
  downArrow,
} from "../../../icons/index";

type Props = {};

const index = (props: Props) => {
  return (
    <Fragment>
      <Button classes="abs-mid-top m-w-100" content={upArrow()} />
      <Button classes="abs-mid-right m-h-100" content={rightArrow()} />
      <Button classes="abs-mid-left m-h-100" content={leftArrow()} />
      <Button classes="abs-mid-bot m-w-100" content={downArrow()} />
    </Fragment>
  );
};

export default index;
