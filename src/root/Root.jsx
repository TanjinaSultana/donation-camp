import { Outlet } from "react-router-dom";

import Navvar from "../navvar/Navvar";



const Root = () => {
    return (
        <div className="container mx-auto">
        <Navvar></Navvar>
         <div className="">
          
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Root;