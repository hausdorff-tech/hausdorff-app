import { Link } from "react-router-dom";
import Logo from "../Imagenes/Logo-pic.png";
import "./Menu.css";

function MobileMenu(){
    return(
        <div>
            <h1>Mobile Menu</h1>
        </div>
    );
}

export default function Menu(){
    let x = window.screen.width;
    if(x < 600){
        return <MobileMenu />
    }
    else{
        return(
            <div id="navbar">
                <div className="linkContainer" id="logoContainer">
                    <Link to="/">
                       <img src={Logo} alt="" id="Logo"/>
                    </Link>
                </div>
                <div className="linkContainer">
                    <Link 
                        to="/servicios-matematicos"
                        className="link"
                    >
                        Servicios matemáticos
                    </Link>
                </div>
                <div className="linkContainer">
                    <Link 
                        to="/servicios-de-desarrollo"
                        className="link"
                    >
                        Servicios de desarrollo web
                    </Link>
                </div>
                <div className="linkContainer">
                    <Link 
                        to="/acerca-de"
                        className="link"
                    >
                        Acerca de
                    </Link>
                </div>
                <div className="linkContainer">
                    <Link 
                        to="/contacto"
                        className="link"
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        );
    }
}