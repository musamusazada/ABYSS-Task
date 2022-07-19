import classes from "./index.module.css";
type Props = {
  content: string | React.ReactNode;
  onClick?: () => void;
  classes?: string;
};

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button
      className={classes.button + " " + props.classes}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};

export default Button;
