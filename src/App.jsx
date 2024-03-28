import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Colors from "./pages/colors/Colors";
import Minage from "./pages/minage/Minage";
import Prestiges from "./pages/prestiges/Prestiges";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/skyofskill" element={<Minage />} />
        <Route path="/skyofskill/colors" element={<Colors />} />
        <Route path="/skyofskill/prestiges" element={<Prestiges />} />

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/skyofskill" />} />
      </Routes>
    </>
  );
}

export default App;
