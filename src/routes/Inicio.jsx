import { CardMenu } from "../components/CardMenu";
import { Carrusel } from "../components/Carrusel";
import Contacto from "./Contacto";

const Inicio = () => {
  return (
    <>
      <div className="text-bg-dark p-3">
        <h1 className='text-white text-center'>Restaurant Bar El Origen, <br />
        donde nace la Historia</h1>
      </div>

      <div>
        <Carrusel />
        <br />
        <CardMenu /> 
        <br />
        <br />
        <Contacto /> 
      </div>
    </>
  )
}

export default Inicio;
