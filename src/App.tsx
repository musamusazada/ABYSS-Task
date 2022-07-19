import Header from "./layout/Header";
import Button from "./UI/Button/Button";
import ZoomController from "./components/ZoomController";
import { centerIcon } from "./icons";

function App() {
  const handleClick = (): void => {
    console.log("Click works");
  };
  return (
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
  );
}

export default App;
