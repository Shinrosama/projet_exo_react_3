
import './App.css';

import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import Profil from './pages/Profil';
import Articles from './pages/Articles';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profil" element={<Profil/>} />
      <Route path="/articles" element={<Articles/>} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
