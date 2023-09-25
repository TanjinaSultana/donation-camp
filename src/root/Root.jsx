import { Outlet } from "react-router-dom";

import Navvar from "../navvar/Navvar";



const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
        <Navvar></Navvar>
         <div className="py-10">
          
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Root;