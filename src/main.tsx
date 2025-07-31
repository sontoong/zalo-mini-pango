/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { App as AntdApp, ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { App, Box, SnackbarProvider } from "zmp-ui";

import { getBasePath } from "./presentation/utils/zma";

import { validateMessages } from "./presentation/constants/validate-messages";
import HomePage from "./presentation/pages/HomePage";

import "dayjs/locale/vi";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
//change to vietnamese
dayjs.locale("vi");
//add plugins
dayjs.extend(utc);
dayjs.extend(timezone);

import { AppProvider } from "./presentation/context/AppContext";
import ServicesPage from "./presentation/pages/ServicesPage";
import MaintenancePage from "./presentation/pages/MaintenancePage";
import OrderPage from "./presentation/pages/OrderPage";
import OrderSuccessPage from "./presentation/pages/OrderSuccessPage";
import MaintenanceTrackingPage from "./presentation/pages/MaintenanceTrackingPage";
import TechnicalSupportPage from "./presentation/pages/TechnicalSupportPage";
import WarrantyPage from "./presentation/pages/WarrantyPage";
import WarrantyOrderPage from "./presentation/pages/WarrantyOrderPage";
import WarrantyOrderSuccessPage from "./presentation/pages/WarrantyOrderSuccessPage";
import WarrantyDetailsPage from "./presentation/pages/WarrantyDetailsPage";
import HistoryPage from "./presentation/pages/HistoryPage";
import HistoryDetailsPage from "./presentation/pages/HistoryDetailsPage";
import ProductsPage from "./presentation/pages/ProductsPage";
import ProductSearchPage from "./presentation/pages/ProductSearchPage";
import ProductDetailsPage from "./presentation/pages/ProductDetailsPage";
import ProductOrderPage from "./presentation/pages/ProductOrderPage";
import ProductOrderSuccessPage from "./presentation/pages/ProductOrderSuccessPage";
import WarrantyActivationPage from "./presentation/pages/WarrantyActivationPage";
import WarrantyActivationSuccessPage from "./presentation/pages/WarrantyActivationSuccessPage";
import AccountPage from "./presentation/pages/AccountPage";
import ProfilePage from "./presentation/pages/ProfilePage";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex flex-1 flex-col overflow-hidden">
        <Outlet />
        <ToastContainer style={{ marginTop: "48px" }} />
      </Box>
    </Box>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/services",
          element: <ServicesPage />,
        },
        {
          path: "/maintenance",
          element: <MaintenancePage />,
        },
        {
          path: "/maintenance/:serviceId",
          element: <MaintenancePage />,
        },
        {
          path: "/order",
          element: <OrderPage />,
        },
        {
          path: "/order-success",
          element: <OrderSuccessPage />,
        },
        {
          path: "/maintenance-tracking",
          element: <MaintenanceTrackingPage />,
        },
        {
          path: "/technical-support",
          element: <TechnicalSupportPage />,
        },
        {
          path: "/technical-support/success",
          element: <TechnicalSupportPage success={true} />,
        },
        {
          path: "/warranty",
          element: <WarrantyPage />,
        },
        {
          path: "/warranty/:warrantyId",
          element: <WarrantyDetailsPage />,
        },
        {
          path: "/warranty-activate",
          element: <WarrantyActivationPage />,
        },
        {
          path: "/warranty-activate-success",
          element: <WarrantyActivationSuccessPage />,
        },
        {
          path: "/order-warranty",
          element: <WarrantyOrderPage />,
        },
        {
          path: "/order-warranty-success",
          element: <WarrantyOrderSuccessPage />,
        },
        {
          path: "/history",
          element: <HistoryPage />,
        },
        {
          path: "/history/:historyId",
          element: <HistoryDetailsPage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/products/search",
          element: <ProductSearchPage />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetailsPage />,
        },
        {
          path: "/order-product",
          element: <ProductOrderPage />,
        },
        {
          path: "/order-product-success",
          element: <ProductOrderSuccessPage />,
        },
        {
          path: "/account",
          element: <AccountPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ],
  { basename: getBasePath() },
);

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#70C89A",
              fontFamily:
                "'Manrope','Inter',-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
            },
          }}
          form={{ validateMessages }}
          locale={viVN}
        >
          <AntdApp>
            <SnackbarProvider>
              <AppProvider>
                <RouterProvider router={router} />
              </AppProvider>
            </SnackbarProvider>
          </AntdApp>
        </ConfigProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;
