import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';
import Minage from './pages/minage/Minage';
import Prestiges from './pages/prestiges/Prestiges';
import Stuffs from './pages/stuffs/Stuffs';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/skyofskill' element={<Home />} />
        <Route path='/skyofskill/minage' element={<Minage />}/>
        <Route path='/skyofskill/prestiges' element={<Prestiges />}/>
        <Route path='/skyofskill/stuffs' element={<Stuffs />}/>

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/skyofskill" />} />
      </Routes>
    </>
  )
}

export default App;
