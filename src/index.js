import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentSection from "./components/content/ContentSection";
import AboutPage from "./components/content/AboutPage";
import ContactPage from "./components/content/ContactPage";
import { contactFormAction } from "./components/content/ContactForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ContentSection />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/works",
        element: (
          <div className="container pt-5">
            <h1 className="text-center text-light">
              Crafting something amazing <br /> Stay tuned for the big reveal!
            </h1>
          </div>
        ),
      },
      {
        path: "/contact",
        element: <ContactPage />,
        action: contactFormAction,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
