import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { AlertaContacto } from './AlertaContacto';

export const InputContacto = () => {

  return (
    <div className="text-bg-dark p-5 mb-3"> 
    
      <h1 className='text-white text-center p-5'> Contáctanos para resolver tus dudas</h1>
      <br />
      <br />
      <Form className="text-bg-dark bg-secondary   p-3">
        <Row >
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

          <Form.Label>Mensaje</Form.Label>
          <Col>
            <Form.Control className="text-muted" type="text" placeholder="Escribe aquí tu mensaje" />
          </Col>
        </Row>

        <Button onClick={AlertaContacto}  className="btn btn-dark" type="button">Enviar</Button>
      </Form>

    </div>
  ) }
  

