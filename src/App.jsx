import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSliders,
  faMagnifyingGlass,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSliders, faMagnifyingGlass, faShoppingCart, faBars);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
