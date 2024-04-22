import "./App.css";
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

// import Caisses from "./pages/caisses/Caisses";
// import Colors from "./pages/colors/Colors";
// import Minage from "./pages/minage/Minage";
// import Prestiges from "./pages/prestiges/Prestiges";

const Caisses = lazy(() => import("./pages/caisses/Caisses"));
const Colors = lazy(() => import("./pages/colors/Colors"));
const Minage = lazy(() => import("./pages/minage/Minage"));
const Prestiges = lazy(() => import("./pages/prestiges/Prestiges"));

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/skyofskill"
          element={
            <Suspense fallback={<Loader />}>
              <Minage />
            </Suspense>
          }
        />
        <Route
          path="/skyofskill/caisses"
          element={
            <Suspense fallback={<Loader />}>
              <Caisses />
            </Suspense>
          }
        />
        <Route
          path="/skyofskill/colors"
          element={
            <Suspense fallback={<Loader />}>
              <Colors />
            </Suspense>
          }
        />
        <Route
          path="/skyofskill/prestiges"
          element={
            <Suspense fallback={<Loader />}>
              <Prestiges />
            </Suspense>
          }
        />

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/skyofskill" />} />
      </Routes>
    </>
  );
}

export default App;
