import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/navbar/Navbar';

import Minage from './pages/minage/Minage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Minage />}/>

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App;
