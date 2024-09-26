import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {cafeStore} from './redux/redux.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store = {cafeStore}>
    <App />
    </Provider>
  </BrowserRouter>
  
);
