import { Outlet } from "react-router-dom";
import Menu from "../Componentes/Menu.js";
export default function IndexMatematicas(){
    return(
        <div>
            <Menu />
            <div>Index matemáticas</div>
            {/*El elemento outlet siempre va al final de elementos principales*/}
            <Outlet />
        </div>
    );
}