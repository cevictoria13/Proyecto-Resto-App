import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contacto = () => {

  return (
    
    <div className="text-bg-dark p-3"> 
    <br />
      <h3 className='text-white'> Contáctanos para resolver tus dudas</h3>
      <Form className="text-bg-dark p-3">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="name" placeholder="Nombre completo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="text-muted" type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="phone" placeholder="Teléfono" />
          </Form.Group>
        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Selecciona tu consulta</Form.Label>
            <Form.Select defaultValue="Selecciona...">
              <option>Selecciona...</option>
              <option>Gastronomía</option>
              <option>Coctelería</option>
              <option>Otro</option>
            </Form.Select>
          </Form.Group>

          <Form.Label column lg={2}>Mensaje</Form.Label>
          <Col>
            <Form.Control className="text-muted" type="text" placeholder="Escribe aquí tu mensaje" />
          </Col>

        </Row>


        <Button variant="success" type="submit">Enviar</Button>
      </Form>

    </div>
  )
}

export default Contacto
