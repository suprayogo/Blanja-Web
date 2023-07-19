import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";

import { store } from "./store";
import { Provider } from "react-redux";

import "./style/Globals.scss";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import RegisterSeller from "./pages/RegisterSeller";
import Login from "./pages/Login";
import LoginSeller from "./pages/LoginSeller";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import SearchPage from "./pages/SearchPage";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSliders,
  faMagnifyingGlass,
  faShoppingCart,
  faBars,
  faStar,
  faMinus,
  faPlus,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faSliders,
  faMagnifyingGlass,
  faShoppingCart,
  faBars,
  faStar,
  faMinus,
  faPlus,
  faBell,
  faEnvelope
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login-seller",
    element: <LoginSeller />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register-seller",
    element: <RegisterSeller />,
  },
  {
    path: "/category/:categoryName",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <Detail />,
  },
  {
    path: "/search/:keyword",
    element: <SearchPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess />,
  },
]);

function App() {
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "token"
        )}`;
      }

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
