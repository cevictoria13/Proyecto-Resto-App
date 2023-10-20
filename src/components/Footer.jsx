import { ArrowRight, Instagram, CloudRainFill } from 'react-bootstrap-icons';


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="text-bg-dark p-3" >
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Restaurant Bar El Origen</h5>
                    <p>Donde nace la Historia, ven a conocernos.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Quienes somos</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Instagram <Instagram /> </a></li>
                        <li><a href="#!">Facebook <CloudRainFill /></a></li>
                        <li><a href="#!">Ubicacion</a></li>
                        <li><a href="#!">Contacto</a></li>
                    </ul>
                </div>


            </div>
        </div>
    </div>
    
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> Restaurant Bar El Origen</a>
    </div>

</footer>

export default Footer