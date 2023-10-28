
import { Button, Card } from "react-bootstrap";
import { CardGroup } from 'react-bootstrap';

//cocteleria 
export const Cocteleria = ({ cocteleria }) => {

    return (

        <div className="text-bg-dark p-3 ">
            <br />

            <h1 className='text-center text-white'>Coctelería</h1>
            <br />
            <p className="text-center text-white p-5">Nuestros cócteles se complementan a la perfección con nuestro menú de gastronomía costera. Consúltenos para recomendaciones de maridaje que realzarán su experiencia. </p>
            <br />

            <CardGroup className="justify-content-center ms-2">

                {                              //informa de los props
                    cocteleria.map(copa => (


                        <Card className="card text-white bg-secondary ms-3" key={copa.id} style={{ width: '18rem' }}>



                            <Card.Img style={{ height: "200px" }} variant="top" src={copa.imagen} alt={copa.nombre} />
                            <br />
                            <Card.Body>
                                <Card.Title  >{copa.nombre}</Card.Title>
                                <Card.Text >
                                    {copa.detalle} {copa._id}
                                </Card.Text>
                            </Card.Body>
                            <Button variant="dark">Precio: ${copa.precio} CLP</Button>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>

    )
}


