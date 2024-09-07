import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Numtify from "../components/Numtify";
import NotFound from "../minicomponents/NotFound";
import UserLayout from "./UserLayout";
import Login from "./Login";
import Account from "./Account";
import AddFunds from "./AddFunds";
import Orders from "./Orders";
import NewOrders from "./NewOrders";
import SignUp from "./SignUp";
import OrderDetails from "./OrderDetails";

export default function Layout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Numtify />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },

    {
      path: "user",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <NewOrders />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "orders/:details",
          element: <OrderDetails />,
        },

        {
          path: "addfunds",
          element: <AddFunds />,
        },
        {
          path: "account",
          element: <Account />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
