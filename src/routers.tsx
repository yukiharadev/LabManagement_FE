import { createBrowserRouter } from "react-router-dom";

import {
  HomePage,
  UserPage,
  DevicesPage,
  NotFoundPage,
  Login,
  Register,
} from "./pages/page.tsx";
import { AuthLayout, DashboardLayout } from "./layouts/layout.tsx";
import OrderRoom from "./pages/Services/OrderRoom.tsx";
import OrderDevice from "./pages/Services/OrderDevice.tsx";

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
        element: <div>Lab Server</div>,
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
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
