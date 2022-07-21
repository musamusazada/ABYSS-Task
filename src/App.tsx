import { nanoid } from "nanoid";
import Header from "./layout/Header";
import Button from "./UI/Button/Button";
import ZoomController from "./components/ZoomController";
import { centerIcon } from "./icons";
import MainPanel from "./layout/MainPanel";
import { Fragment } from "react";

function App() {
  const handleCenter = () => {
    const tree = document.querySelector(".tree") as HTMLDivElement;
    tree.style.left = "50%";
    tree.style.top = "50%";
  };
  return (
    <Fragment>
      <Header
        title="Services"
        actions={[
          <Button key={nanoid()} content="List View" classes="primary-bg" />,
          <Button
            key={nanoid()}
            content={centerIcon()}
            onClick={handleCenter}
          />,
          <ZoomController key={nanoid()} />,
        ]}
      />
      <MainPanel />
    </Fragment>
  );
}

export default App;
