import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Recientes from "./pages/Recientes";
import Proximamente from "./pages/Proximamente";
import MejorValoradasCine from "./pages/MejorValoradasCine";
import MejorValoradasTv from "./pages/MejorValoradasTv";
import PorGenerosCine from "./pages/PorGenerosCine";
import PorGenerosTv from "./pages/PorGenerosTv";
import TendenciasCine from "./pages/TendenciasCine";
import TendenciasTv from "./pages/TendenciasTv";
import Header from "./components/Header";
import SeEmitenHoy from "./pages/SeEmitenHoy";
import Personas from "./pages/Personas";
import Busquedas from "./pages/Busquedas";



function App() {


  return (
    <>
      
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="*" element={<Recientes/>} />
              <Route path="/" element={<Recientes/>} />
              <Route path="/Proximamente" element={<Proximamente/>} />
              <Route path="/MejorValoradaCine" element={<MejorValoradasCine/>} />
              <Route path="/MejorValoradaTv" element={<MejorValoradasTv/>} />
              <Route path="/PorGenerosCine" element={<PorGenerosCine/>} />
              <Route path="/PorGenerosTv" element={<PorGenerosTv/>} />
              <Route path="/TendenciaCine" element={<TendenciasCine/>} />
              <Route path="/TendenciaTv" element={<TendenciasTv/>} />
              <Route path="/SeEmitenHoy" element={<SeEmitenHoy/>} />
              <Route path="/Personas" element={<Personas/>} />
              <Route path="/Busquedas" element={<Busquedas/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
Personas
export default App
