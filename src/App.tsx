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
            content="List View"
            classes="primary-bg"
            onClick={handleClick}
          />,
          <Button content={centerIcon()} />,
          <ZoomController />,
        ]}
      />
      <MainPanel />
    </Fragment>
  );
}

export default App;
