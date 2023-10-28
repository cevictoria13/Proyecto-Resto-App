import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const CardHistory = () => {
  return (
    <CardGroup className="justify-content-center ms-2">
    <Card className="card text-white bg-secondary ms-3">
      <Card.Img variant="top" src="../../public/vistamar.jpg" />
      <Card.Body>
        <Card.Title>Ubicación</Card.Title>
        <Card.Text>
        El Origen se encuentra en una ubicación privilegiada, con vistas panorámicas al mar y una brisa fresca que siempre acompañaba a los comensales. La decoración del restaurante era simple pero auténtica, con mesas de madera desgastada y redes de pesca decorativas colgadas en las paredes, recordando a los visitantes que estaban a punto de embarcarse en una aventura culinaria marina.
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card className="card text-white bg-secondary ms-3">
      <Card.Img variant="top" src="../../public/plato-de-mariscos-1595505096.jpg" />
      <Card.Body>
        <Card.Title>Carta</Card.Title>
        <Card.Text>
        La Carta de Carlos estaba lleno de tesoros del océano: langostas a la parrilla con mantequilla de ajo, ceviche fresco con cangrejo y camarones, y su plato estrella, la paella de mariscos, llena de calamares, mejillones y langostinos. Los ingredientes eran siempre frescos y se recolectaban directamente de la pesca local. Carlos se aseguraba de que cada plato fuera una verdadera celebración de los sabores del mar.
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card className="card text-white bg-secondary ms-3">
      <Card.Img variant="top" src="../../public/clientes.jpg" />
      <Card.Body>
        <Card.Title>Clientes</Card.Title>
        <Card.Text>
        Los clientes que visitaban el restaurante se sentían parte de una tradición centenaria, donde los secretos de la cocina de mariscos se pasaban de generación en generación. Las historias de pesca, las recetas transmitidas de abuelos a nietos y la autenticidad de El Origen convertían cada comida en una experiencia única.
        </Card.Text>
      </Card.Body>
      
    </Card>
  </CardGroup>
   
  )
}
