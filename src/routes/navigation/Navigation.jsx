import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <header>
            <div>
                <Navbar bg='dark' data-bs-theme="dark" className="me-auto" expand="lg">
                    <Container>
                        <Navbar.Brand  href="/"><img src="../../../public/logo-el-origen-restobar.jpg" /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href="/historia">Historia</Nav.Link>
                                <Nav.Link href="/carta">Carta</Nav.Link>
                                <Nav.Link href="/ubicacion">Ubicación</Nav.Link>
                                <Nav.Link href="/contacto">Contacto</Nav.Link>
                                <Nav.Link href="/reservas">Reservas</Nav.Link> {/*lo agregamos al navbar, para señalar que lo tenemos contemplado, y activaremos más adelante*/}

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        </header>
    )
}

export default Navigation
