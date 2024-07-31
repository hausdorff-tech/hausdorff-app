import { Outlet } from "react-router-dom";
import Menu from "../Componentes/Menu.js";

export default function Contacto(){ 
    return(
        <div>
            <Menu />
            <div>Contacto</div>
            
            {/*El elemento outlet siempre va al final de elementos principales*/}
            <Outlet />
        </div>
    );
}