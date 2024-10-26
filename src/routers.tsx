import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home/Home.tsx";
import UserPage from "./pages/User/UserPage.tsx";
import AuthLayout from "./layouts/auth/AuthLayout.tsx";
import DashboardLayout from "./layouts/dashboard/DashboardLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
