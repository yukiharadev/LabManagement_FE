import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { AuthProvider } from "../hooks/useAuth.tsx";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "../layouts/layout.tsx";
import {
  DevicesPage,
  HomePage,
  LabDetailsItem,
  LabPage,
  Login,
  NotFoundPage,
  OrderDevice,
  OrderRoom,
  Register,
  StatisticsPage,
  UserPage,
} from "../pages/page.tsx";
import DeviceDetailItem from "../components/Devices/DeviceDetailItem.tsx";

const router = createBrowserRouter(
  [
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
      element: (
        <AuthProvider>
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        </AuthProvider>
      ),
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
          path: "device/:id",
          element: <DeviceDetailItem />,
        },
        {
          path: "lab",
          element: <LabPage />,
        },
        {
          path: "lab/:id",
          element: <LabDetailsItem />,
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
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

export default router;
