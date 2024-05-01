import "./App.css";
import { Suspense, lazy, createElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./pages/home/Home"));
const Caisses = lazy(() => import("./pages/caisses/Caisses"));
const Colors = lazy(() => import("./pages/colors/Colors"));
const Minage = lazy(() => import("./pages/minage/Minage"));
const Prestiges = lazy(() => import("./pages/prestiges/Prestiges"));

const componentsMap = {
  Caisses: Caisses,
  Colors: Colors,
  Prestiges: Prestiges,
  Minage: Minage,
};

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/skyofskill"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        {["Caisses", "Colors", "Prestiges", "Minage"].map((el, i) => (
          <Route
            path={"/skyofskill/" + el.toLowerCase()}
            key={el + i}
            element={
              <Suspense fallback={<Loader />}>
                {createElement(componentsMap[el])}
              </Suspense>
            }
          />
        ))}

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/skyofskill" />} />
      </Routes>
    </>
  );
}

export default App;
