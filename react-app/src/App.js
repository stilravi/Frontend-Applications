import "./App.css";
import { Button } from "./Components/Button";
import { AppContainer } from "./Components/AppContainer";

function App() {
  return (
    <AppContainer>
      <Button bgColor="green">Click this button</Button>
      <Button bgColor="red">Click this button</Button>
    </AppContainer>
  );
}

export default App;
