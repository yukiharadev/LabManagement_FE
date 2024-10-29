import { createBrowserRouter } from "react-router-dom";

import {
  HomePage,
  UserPage,
  DevicesPage,
  NotFoundPage,
  Login,
  Register,
  OrderDevice,
  OrderRoom,
  LabPage,
  StatisticsPage,
} from "./pages/page.tsx";
import { AuthLayout, DashboardLayout } from "./layouts/layout.tsx";

import DemoOrderTeacher from "./pages/Services/DemoOrderTeacher.tsx";

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
        path: "devices",
        element: <DevicesPage />,
      },
      {
        path: "lab",
        element: <LabPage />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "services",
        children: [
          {
            path: "order-device",
            element: <OrderDevice />,
          },
          {
            path: "order-lab",
            element: <OrderRoom />,
          },
          {
            path: "demo-teacher-devices",
            element: <DemoOrderTeacher />,
          },
        ],
      },
      {
        path: "statistics",
        element: <StatisticsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
