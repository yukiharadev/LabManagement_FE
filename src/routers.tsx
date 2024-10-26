import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import UserPage from "./pages/UserPage.tsx";
import AuthLayout from "./layouts/auth/AuthLayout.tsx";
import DashboardLayout from "./layouts/dashboard/DashboardLayout.tsx";
import Login from "./pages/Auth/Login.tsx";
import Register from "./pages/Auth/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
