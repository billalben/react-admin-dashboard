import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "@/layouts/MainLayout";

// pages
import AnalyticsPage from "@/pages/AnalyticsPage";
import OrdersPage from "@/pages/OrdersPage";
import OverviewPage from "@/pages/OverviewPage";
import ProductsPage from "@/pages/ProductsPage";
import SalesPage from "@/pages/SalesPage";
import SettingsPage from "@/pages/SettingsPage";
import UsersPage from "@/pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "sales",
        element: <SalesPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
