import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/signin",
      element: <Signin/>
    }
  ])