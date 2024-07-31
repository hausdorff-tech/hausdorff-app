import { Outlet } from "react-router-dom";
import Menu from "../Componentes/Menu.js";

export default function IndexDesarrollo(){
    return(
        <div>
            <Menu />
            <div>Index desarrollo</div>
            {/*El elemento outlet siempre va al final de elementos principales*/}
            <Outlet />
        </div>
    );
}