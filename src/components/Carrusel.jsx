import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

export const Carrusel = () => {
    return (
        <Carousel  data-bs-theme="dark">
            <Carousel.Item className='micarrusel'>
                <img
                    className="d-block w-100 "
                    src="../../public/restaurantes-de-lujo-ibiza.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className='text-white' >TERRAZA EL ORIGEN</h2>
                    <h4 className='text-white'>El Origen de las experiencias en Caldera</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='micarrusel'>
                <img
                    className="d-block w-100"
                    src="../../public/mariscada-recetas-chef-oropeza.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2 className='text-white'>GASTRONOMÍA LOCAL</h2>
                    <h4 className='text-white'>Disfruta con nosotros, <br /> los sabores de la costa atacameña</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='micarrusel'>
                <img
                    className="d-block w-100"
                    src="../../public/foto-barra-bar-el-origen-1.avif"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2 className='text-white'>COCTELERÍA DE AUTOR</h2>
                    <h4 className='text-white'>Ven a degustar la coctelería emergente <br /> junto al mar</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}


