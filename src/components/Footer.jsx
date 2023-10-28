import { Instagram, Facebook, Geo, Telephone  } from 'react-bootstrap-icons';


export const Footer = () => 
<footer className= "text-bg-dark p-3">
    <div className= ""> 
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <br />
                    <h5 className="text-uppercase">Resto Bar El Origen</h5>
                    <p>Donde nace la Historia, 
                        <br />
                        ¡Ven a conocernos!</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <br />
                    <h5 className="text-uppercase">Síguenos</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!"><Instagram /></a> RestoBar_El Origen</li>
                        <li><a href="#!"><Facebook /></a> RestoBar El origen</li>
                        <li><a href="#!"><Geo /></a>Wheelwright 673, Caldera, Atacama</li>
                        <li><a href="#!"><Telephone /></a> +56 9 555 55 555</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> Restaurant Bar El Origen</a>
    </div>

</footer>



