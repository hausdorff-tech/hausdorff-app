import { createBrowserRouter } from "react-router-dom";
//Rutas principales
import Inicio from "./Inicio/Inicio.js";
import IndexMatematicas from "./Matematicas/Index-Matematicas.js";
import IndexDesarrollo from "./Desarrollo-web/IndexDesarrollo.js";
import AcercaDe from "./Acerca-de/AcercaDe.js";
import Contacto from "./Contacto/Contacto.js";

//Rutas matemáticas
import OptimizacionProcesos from "./Matematicas/OptimizacionProcesos/OptimizacionProcesos.js";
import ModelosFinancieros from "./Matematicas/ModelosFinancieros/ModelosFinancieros.js";
import AnalisisDatos from "./Matematicas/AnalisisDatos/AnalisisDatos.js";
import DiseñoElectronicos from "./Matematicas/DiseñoElectronicos/DiseñoElectronicos.js";
import OptimizacionInventarios from "./Matematicas/OptimizacionInventarios/OptimizacionInventarios.js";
import SoftwareMatematico from "./Matematicas/SoftwareMatematico/SoftwareMatematico.js";
import MantenimientoSoftware from "./Matematicas/MantenimientoSoftware/MantenimientoSoftware.js";
import HerramientasAutomatizacion from "./Matematicas/HerramientasAutomatizacion/HerramientasAutomatizacion.js";

//Rutas de desarrollo de software
import Frontend from "./Desarrollo-web/Frontend/Frontend.js";
import Backend from "./Desarrollo-web/Backend/Backend.js";
import AnimacionesAvanzadas from "./Desarrollo-web/AnimacionesAvanzadas/AnimacionesAvanzadas.js";
import Fullstack from "./Desarrollo-web/Fullstack/Fullstack.js";

let Router = createBrowserRouter([
    {path:"/", element: <Inicio />}, //Aquí va el element <Outlet />
    {path:"/servicios-matematicos", element:<IndexMatematicas />}, //Aquí va el elemento <Outlet />
    {path:"/servicios-de-desarrollo", element:<IndexDesarrollo />}, //Aquí va el elemento <Outlet />
    {path:"/acerca-de", element:<AcercaDe/>}, //Aquí va el elemento <Outlet />
    {path:"/contacto", element:<Contacto />},//Aquí va el elemento <Outlet/>

    //Rutas matemáticas
    {path:"/optimizacion-de-procesos", element:<OptimizacionProcesos/>},
    {path:"/modelos-financieros", element:<ModelosFinancieros />},
    {path:"/analisis-de-datos", element:<AnalisisDatos />},
    {path:"/diseño-de-electronicos",element:<DiseñoElectronicos />},
    {path:"/optimizacion-de-inventarios", element:<OptimizacionInventarios />},
    {path:"/desarrollo-software-matematico",element:<SoftwareMatematico />},
    {path:"/mantenimiento-de-software", element:<MantenimientoSoftware />},
    {path:"/desarrollo-herramientas-automatizacion", element:<HerramientasAutomatizacion />},

    //Rutas de desarrollo de software
    {path:"/desarrollo-frontend", element:<Frontend />},
    {path:"/dearrollo-backend", element:<Backend />},
    {path:"/animaciones-avanzadas", element:<AnimacionesAvanzadas />},
    {path:"/desarrollo-fullstack", element:<Fullstack />}

]);

export default Router;