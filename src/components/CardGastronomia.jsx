import menu from '../menu.json'
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { CardGroup } from 'react-bootstrap';

export const CardGastronomia = () => {
 
    return (
        <div className="text-bg-dark p-3 ">
            <br />

            <h2 className='text-center text-white'>GASTRONOMÍA DESTACADA</h2>
            <br />

            <h3 className='text-center text-white'>Te presentamos El Origen <br /> de la gastronomía atacameña</h3>
            <br />
            <div className=" ">
                <CardGroup className="justify-content-center ms-2">
                    
                       {
                        menu.platos.map(plato => (

                            <Card className="card text-white bg-secondary ms-3" key={plato.SKU} style={{ width: '18rem'}}>
                                <Card.Img style={{ height: "200px" }} variant="top" src={plato.imagen} />
                                <br />
                                <Card.Body>
                                    <Card.Title className='text-center' >{plato.nombre}</Card.Title>
                                    <Card.Text className='text-center'>
                                        {plato.descripcion}
                                    </Card.Text>
                                </Card.Body>
                                {/* <Button  variant="success">ver detalles</Button> */}
                            </Card>
                        ))
                    }
                </CardGroup>
            </div>
        </div>
    )
}


