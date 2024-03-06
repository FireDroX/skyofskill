import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Minage from "./pages/minage/Minage";
import Prestiges from "./pages/prestiges/Prestiges";

// TODO: Add "memory" to the pages (w/ Context & useContext())
// NOTE: https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7256029-partagez-vos-donnees-avec-le-contexte-et-usecontext

// TODO: Make the pages changes without changing the path, so github dont die when it changes

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/skyofskill" element={<Home />} />
        <Route path="/skyofskill/minage" element={<Minage />} />
        <Route path="/skyofskill/prestiges" element={<Prestiges />} />

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/skyofskill" />} />
      </Routes>
    </>
  );
}

export default App;
