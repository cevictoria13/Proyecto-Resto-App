import { Routes, Route } from "react-router-dom"
import Inicio from "./components/Inicio"
import Gastronomía from "./components/Gastronomía"
import Reservas from "./components/Reservas"
import NotFoundPage from "./components/NotFoundPage"
import Servicios from "./components/Servicios"

function App() {
  

  return (
    <>
      <div>
       <Routes>
          <Route path="/inicio" element= { <Inicio /> }  />
          <Route path="/servicios" element= {<Gastronomía />}  />
          <Route path="/servicios:gastronomía" element= {<Servicios />}  />
          <Route path="/reservas" element= {<Reservas />}  />
          <Route path="*" element= {<NotFoundPage />}  />
       </Routes>
      </div>
      
    </>
  )
}

export default App
