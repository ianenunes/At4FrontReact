import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./views/Home";
import Promocao from "./views/Promocao";
import Destinos from "./views/Destinos";
import Contatos from "./views/Contatos";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./assets/style.css";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Promocao" element={<Promocao/>}/>
<Route path="/Destinos" element={<Destinos/>}/>
<Route path="/Contatos" element={<Contatos/>}/>


</Routes>
<Footer/>
        </BrowserRouter>
  );
}

export default App;
