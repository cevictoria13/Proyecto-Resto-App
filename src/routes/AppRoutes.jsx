import { Routes, Route } from "react-router-dom"
import { Inicio } from "./Inicio"
import { Carta } from "./Carta"
// import { Menu }  from "./Menu"
import { Ubicacion } from "./Ubicacion"
import { Contacto } from "./Contacto"
//import Reservas from "../components/Reservas"

import NotFoundPage from "./NotFoundPage"
import { Historia } from "./Historia"
import { Layout } from "../components/Layout/Layout"


 export const AppRoutes = () => {
  return (
    <div>
   
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
    {/*   <Route path="/reservas" element={<Reservas />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>

     
    </div>
  )
}


