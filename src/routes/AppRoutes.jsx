import { Routes, Route } from "react-router-dom"
import Inicio from "./Inicio"
import Historia from "./Historia"
import { Gastronomia } from "./Gastronomia"
import { Ubicacion } from "./Ubicacion"
import Contacto from "./Contacto"
//import Reservas from "../components/Reservas"
import Layout from "../components/Layout/Layout" 
import NotFoundPage from "./NotFoundPage"


const AppRoutes = () => {
  return (
    <div>
   
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
    {/*   <Route path="/reservas" element={<Reservas />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>

     
    </div>
  )
}

export default AppRoutes
