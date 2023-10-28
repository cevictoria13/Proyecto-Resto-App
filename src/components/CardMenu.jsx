
import { Button, Card } from "react-bootstrap";
import { CardGroup } from 'react-bootstrap';

export const Menu = ({ menu }) => {







    return (
        <div className="text-bg-dark p-3 ">
            <br />

            <h1 className='text-center text-white'>Menú</h1>
            <br />
            <p className="text-center text-white p-5"> Cada plato que sale de nuestra cocina es una obra maestra culinaria. Nuestros chefs expertos combinan la frescura de los ingredientes locales con técnicas innovadoras para crear sabores que despiertan los sentidos. </p>
            <br />

            <CardGroup className="justify-content-center ms-2">

                {
                    menu.map(plato => (

                        <Card className="card text-white bg-secondary ms-3" key={plato.id} style={{ width: '18rem' }}>
                            <Card.Img style={{ height: "200px" }} variant="top" src={plato.imagen} alt={plato.nombre} />
                            <br />
                            <Card.Body>
                                <Card.Title className='text-center' >{plato.nombre}</Card.Title>
                                <Card.Text className='text-center'>
                                    {plato.detalle}
                                </Card.Text>
                            </Card.Body>
                            <Button variant="dark">Precio: ${plato.precio} CLP</Button>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>

    )
}


