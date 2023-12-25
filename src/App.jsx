import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//import GlobalStyles from "./styles/GlobalStyles";
//import Dashboard from "./pages/Dashboard";
//import Bookings from "./pages/Bookings";
//import Cabins from "./pages/Cabins";
//import Users from "./pages/Users";
//import Settings from "./pages/Settings";
//import Account from "./pages/Account";
//import Login from "./pages/Login";
//import PageNotFound from "./pages/PageNotFound";
//import AppLayout from "./ui/AppLayout";
//import Booking from "./pages/Booking";
//import Checkin from "./pages/Checkin";
//import ProtectedRote from "./ui/ProtectedRote";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import Spinner from "./ui/Spinner.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const GlobalStyles = lazy(() => import("./styles/GlobalStyles.js"));
const Cabins = lazy(() => import("./pages/Cabins.jsx"));
const Users = lazy(() => import("./pages/Users.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const Account = lazy(() => import("./pages/Account.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const Booking = lazy(() => import("./pages/Booking.jsx"));
const Checkin = lazy(() => import("./pages/Checkin.jsx"));
const AppLayout = lazy(() => import("./ui/AppLayout.jsx"));
const ProtectedRote = lazy(() => import("./ui/ProtectedRote.jsx"));
const Bookings = lazy(() => import("./pages/Bookings.jsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Suspense fallback={<Spinner />}>
          <GlobalStyles />

          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRote>
                    <AppLayout />
                  </ProtectedRote>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="bookings/:bookingId" element={<Booking />} />
                <Route path="checkin/:bookingId" element={<Checkin />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account" element={<Account />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </Suspense>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
