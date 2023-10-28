import Blog, { BlogInicio } from "../components/BlogInicio";
import { CardGastronomia } from "../components/CardGastronomia"
import { Carrusel } from "../components/Carrusel";
import "./inicio.css"

export const Inicio = () => {
  return (
    <>
      <div className="text-bg-dark p-3">
        <br />
        <h1 className='text-white text-center'>Restaurant Bar El Origen, <br />
        donde nace la Historia</h1>
      </div>

      <div>
        <Carrusel />
        <br />
        <CardGastronomia /> 
        <br />
        <br />
        <BlogInicio />
        <br />
        <Blog />
      </div>
    </>
  )
}


