import menu from '../menu.json'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardGroup } from 'react-bootstrap';

export const CardMenu = () => {
 
    return (
        <div>

            <h1 className='text-center'>GASTRONOMÍA</h1>
            <br />

            <h3 className='text-center'>Te presentamos los platos destacados en El Origen</h3>
            <br />
            <div className=" ">
                <CardGroup className="justify-content-center ms-5">
                    
                       {
                        menu.platos.map(plato => (

                            <Card className="card text-white bg-dark ms-3" key={plato.SKU} style={{ width: '18rem', height: '420px' }}>
                                <Card.Img style={{ height: "200px" }} variant="top" src={plato.imagen} />
                                <br />
                                <Card.Body>
                                    <Card.Title className='text-center' >{plato.nombre}</Card.Title>
                                    <Card.Text className='text-center'>
                                        {plato.descripcion}
                                    </Card.Text>
                                </Card.Body>
                                <Button  variant="success">ver detalles</Button>
                            </Card>
                        ))
                    }
                </CardGroup>
            </div>
        </div>
    )
}


{/*menu.cocktails.map(cocktail=> (

    <Card key={cocktail.SKU} style={{ width: '18rem'}}>
        <Card.Img variant="top" src= {cocktail.imagen} />
        <br />
        <Card.Body>
            <Card.Title>{cocktail.nombre}</Card.Title>
            <Card.Text>
                {cocktail.descripcion}
            </Card.Text>
        </Card.Body>   */}