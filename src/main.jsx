import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import Donation from "./pages/DonationPage/DonationPage";
import Statistics from "./pages/StatisticsPage/Statistics";
import CardDetails from "./pages/CardDetailsPage/CardDetailsPage";
import ErrorPage from "./pages/ErrorPage/Error";
import ErrorDonationPage from "./components/ErrorDonationPage/ErrorDonation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("/fake.json"),
      },
      {
        path: "/donation",
        errorElement: <ErrorDonationPage></ErrorDonationPage>,
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/fake.json"),
      },
      {
        path: "/card/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("/fake.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
