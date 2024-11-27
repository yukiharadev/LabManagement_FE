import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { AuthProvider } from "../hooks/useAuth.tsx";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "../layouts/layout.tsx";
import {
    DeviceHistory,
    DevicesPage,
    HomePage,
    LabDetailsItem,
    LabHistory,
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
import Forbidden from "../pages/Error/Forbidden.tsx";
import DeviceManagement from "../pages/Device/DeviceManagement.tsx";

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
                    children: [
                        {
                            index: true,
                            element: <DevicesPage />,
                        },
                        {
                            path: "user-booking",
                            element: <DeviceManagement />,
                        }
                    ],

                },
                {
                    path: "device/:id",
                    element: <DeviceDetailItem />,
                },
                {
                    path: "/history",
                    children: [
                        {
                            path: "device",
                            element: <DeviceHistory />,
                        },
                        {
                            path: "lab",
                            element: <LabHistory />,
                        },
                    ]
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
        {
            path: "/forbidden",
            element: <Forbidden />,
        }
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
