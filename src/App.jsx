import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landing";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import LinkPage from "./pages/link.jsx";
import RedirectLink from "./pages/redirect-link";
import UrlProvider from "./context";
import RequireAuth from "./components/require-auth";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/dashboard",
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
        },
        {
          path: "/link/:id",
          element: (
            <RequireAuth>
              <LinkPage />
            </RequireAuth>
          ),
        },
        {
          path: "/:id",
          element: <RedirectLink />,
        },
      ],
    },
  ]);
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;
