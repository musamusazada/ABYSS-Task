import { nanoid } from "nanoid";
import Header from "./layout/Header";
import Button from "./UI/Button/Button";
import ZoomController from "./components/ZoomController";
import { centerIcon } from "./icons";
import MainPanel from "./layout/MainPanel";
import { Fragment } from "react";

function App() {
  const handleClick = (): void => {
    console.log("Click works");
  };
  return (
    <Fragment>
      <Header
        title="Services"
        actions={[
          <Button
            key={nanoid()}
            content="List View"
            classes="primary-bg"
            onClick={handleClick}
          />,
          <Button key={nanoid()} content={centerIcon()} />,
          <ZoomController key={nanoid()} />,
        ]}
      />
      <MainPanel />
    </Fragment>
  );
}

export default App;
