import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Router/routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
