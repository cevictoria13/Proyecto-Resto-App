import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const BlogInicio = () => {

  return (
    <CardGroup className="justify-content-center ms-2">
      <Card className="card text-white bg-secondary ms-3">
        <Card.Img variant="top" src="../../public/comunidad-restaurant-el-origen-3.avif" />
        <Card.Body>
          <Card.Title className='text-center'>Quiénes Somos</Card.Title>
          <Card.Text className='text-center'>
            En El Origen nos enorgullece ofrecer una experiencia culinaria única en el corazón de la hermosa ciudad de Atacama. Fundado en 1988, hemos estado sirviendo a los amantes de la buena comida con pasión y dedicación.
            <br />
            Nuestra visión es crear un ambiente que refleje la belleza y la serenidad del mar, y donde nuestros clientes puedan disfrutar de deliciosos platillos preparados con los ingredientes más frescos y locales.
            <br />
            La misión de El Origen es deleitar a nuestros clientes con una fusión única de sabores marinos y una atención excepcional. Nos esforzamos por resaltar la diversidad de los tesoros culinarios que nos brinda el océano.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    
      <Card className="card text-white bg-secondary ms-3">
        <Card.Img variant="top" src="../../public/recetas-para-el-verano.jpg" />
        <Card.Body>
          <Card.Title className='text-center'>Encuentra tu lugar aquí</Card.Title>
          <Card.Text className='text-center'>
            El Origen se encuentra en la pintoresca costa de Atacama, un lugar de belleza natural y serenidad. Nuestra dirección es: Wheelwright 673, Caldera
            <br />
            Si desea disfrutar de una vista impresionante del océano mientras cena, no busque más allá de El Origen.
            <br />
            Puedes visitarnos en los siguientes horarios: Lunes a Domingo de 12:00 pm a 02:00 am.
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>
  )
}



function Blog() {
  return (
    <Card className="bg-secondary text-white ms-4 ">
      <h4 className='ms-3'> <br />
      Nuestra calidad ha sido reconocida por los mejores</h4>
      <p className='text-white ms-3'>
        El Mejor Rincón Gastronómico a Orillas del Mar, Nuestra pasión y compromiso nos han valido el reconocimiento de críticos culinarios y la lealtad de nuestros comensales. Hemos sido galardonados con múltiples premios por la calidad de nuestra comida y nuestro servicio excepcional.</p>

      <Card.Img style={{ width: "600px"}} className="bg-secondary ms-4" src="../../public/Captura excelencia.JPG" alt="EL ORIGEN" />
      <br />

    </Card>
  );
}

export default Blog;

