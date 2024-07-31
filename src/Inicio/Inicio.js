import { Outlet } from "react-router-dom";
import Menu from "../Componentes/Menu.js";

export default function Inicio(){
    return(
        <div>
            <Menu />
            <h1>Inicio</h1>
            {/*El elemento outlet siempre va al final de elementos principales*/}
            <Outlet />
        </div>
    );
}