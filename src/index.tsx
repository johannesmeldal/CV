import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Context/AppContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import ErrorPage from "./Pages/ErrorPage";
// import Home from "./components/Home.tsx";
import Cv from "./Pages/Cv";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "cv",
        element: <Cv />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
