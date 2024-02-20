import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/navbar/Navbar';

import Minage from './pages/minage/Minage';
import Prestiges from './pages/prestiges/Prestiges';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/minage' element={<Minage />}/>
        <Route path='/prestiges' element={<Prestiges />}/>

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/minage" />} />
      </Routes>
    </>
  )
}

export default App;
