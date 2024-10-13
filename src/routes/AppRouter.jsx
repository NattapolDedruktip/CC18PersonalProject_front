import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Unauthorization from "../pages/Unauthorization";
import PageNotFound from "../pages/PageNotFound";
import MapSearch from "../components/MapSearch";
import UserMapLayout from "../layouts/user-layout/UserMapLayout";
import UserInfoLayout from "../layouts/user-layout/UserInfoLayout";
import PersonalInfo from "../pages/user/PersonalInfo";
import MyBooking from "../pages/user/MyBooking";
import BookingHistory from "../pages/user/BookingHistory";
import WaitForPayment from "../pages/user/WaitForPayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "unauthorization", element: <Unauthorization /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },

  {
    path: "/user/search",
    element: <UserMapLayout />,
    children: [{ index: true, element: <MapSearch /> }],
  },

  {
    path: "/userInfo",
    element: <UserInfoLayout />,
    children: [
      {
        index: true,
        element: <PersonalInfo />,
      },
      {
        path: "myBooking",
        element: <MyBooking />,
      },
      {
        path: "bookingHistory",
        element: <BookingHistory />,
      },
      {
        path: "waitForPayment",
        element: <WaitForPayment />,
      },
    ],
  },
]);

function AppRouter() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRouter;
