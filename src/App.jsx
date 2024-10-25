import "./App.css";
import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./pages/home/Home"));
const Caisses = lazy(() => import("./pages/caisses/Caisses"));
const Colors = lazy(() => import("./pages/colors/Colors"));
const Minage = lazy(() => import("./pages/minage/Minage"));
const Prestiges = lazy(() => import("./pages/prestiges/Prestiges"));
const Halloween_2024 = lazy(() =>
  import("./pages/halloween_2024/Halloween_2024")
);

function App() {
  function DynamicPage() {
    const [page, setPage] = useState(null);
    const location = useLocation();

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      setPage(queryParams.get("page"));
    }, [location]);

    switch (page) {
      case "halloween_2024":
        return <Halloween_2024 />;
      case "caisses":
        return <Caisses />;
      case "colors":
        return <Colors />;
      case "minage":
        return <Minage />;
      case "prestiges":
        return <Prestiges />;
      default:
        return <Home />;
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/skyofskill"
          element={
            <Suspense fallback={<Loader />}>
              <DynamicPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
