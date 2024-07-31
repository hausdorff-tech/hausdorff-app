import { Outlet } from "react-router-dom";
import Menu from "../Componentes/Menu.js";

export default function AcercaDe(){
    return(
        <div>
            <Menu />
            <div>Acerca de</div>
            {/*El elemento outlet siempre va al final de elementos principales*/}
            <Outlet />
        </div>
    );
}