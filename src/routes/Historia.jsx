import Card from "react-bootstrap/Card";
import { CardHistory } from "../components/CardHistory";




export const Historia = () => {
  return (
    <div className="text-bg-dark p-3" >
      <br />
      <h1 className='text-center'>Nuestra Historia</h1>
            <br />
      <Card className=" text-white">
        <Card.Img
          src="../../public/cq5dam.thumbnail.cropped.1500.844.jpeg"
          height="500px"
          alt="Card image"
        />
        <Card.ImgOverlay>
        
          <Card.Text>
            En la costa de un pequeño pueblo pesquero, donde el aroma del mar y
            el sonido de las olas se fundían en un abrazo perfecto, se
            encontraba un modesto restaurante conocido como El Origen. Este
            lugar era un tesoro escondido que los lugareños guardaban
            celosamente, un verdadero refugio para los amantes de los sabores
            del océano. La historia de este restaurante tenía sus raíces en una
            familia dedicada a la pesca desde hace generaciones. El abuelo de
            Carlos, el propietario del restaurante, había sido un pescador
            apasionado que había transmitido su amor por el mar y los mariscos a
            su nieto. Con la inspiración de su abuelo, Carlos había decidido
            convertir su herencia en una experiencia culinaria única.
          </Card.Text>
          
        </Card.ImgOverlay>
       
      </Card>
      <br />
      <>
        <CardHistory/>
      </>
      <br />
    </div>
  );
}


