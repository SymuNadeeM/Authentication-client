

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import Home from "./pages/Home";
import './style/index.css';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <SignUp /> ,
    },
    {
      path: "/login",
      element: <Login /> ,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
