import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateProvider } from "./components/CatContext/CartContext.jsx";
import reducer, {
  initialState,
} from "./components/CatContext/CartContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
