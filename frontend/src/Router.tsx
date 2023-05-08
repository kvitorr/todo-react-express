import { createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import App from "./App";
import Desktop from "./components/Desktop";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Desktop/> },
        { path: "/signup", element: <Signup/> },
        { path: "/signin", element: <Signin/> }
      ],
    },
]);