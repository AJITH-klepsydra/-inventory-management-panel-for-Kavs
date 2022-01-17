import { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { LoaderContext } from "./context/loaderContext.js";
import { HomePage } from "./pages/Home.js";
import { SidePanel } from "./components/HomePage/Sidepanel/sidepanel.js";
import { UserContextProvider } from "./context/user.js";
import { CheckoutPage } from "./components/Checkout.js";
import { AttendanceContextProvider } from "./context/attendanceContext.js";
import { Attendance } from "./pages/attendance.js";

const Login = lazy(() => import("./pages/Login.js"));

function App() {
  const { isLoading, params } = useContext(LoaderContext);

  return (
    <UserContextProvider>
      <BrowserRouter>
        <SidePanel view={ROUTES.home} />
        {isLoading && (
          <div className="z-90 fixed flex items-center justify-center h-screen w-screen bg-primary bg-opacity-80">
            <Loader
              type={params.type1.type}
              color={params.type1.color}
              height={100}
              width={100}
            />
          </div>
        )}
        <AttendanceContextProvider>
          <Suspense fallback={<b className="text-red-600">Loading..</b>}>
            <Routes>
              <Route path={ROUTES.login} element={<Login />} />
              <Route path={ROUTES.home} element={<HomePage />} />
              <Route path={ROUTES.checkout} element={<CheckoutPage />} />
              <Route path={ROUTES.attendance} element={<Attendance />} />
            </Routes>
          </Suspense>
        </AttendanceContextProvider>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
