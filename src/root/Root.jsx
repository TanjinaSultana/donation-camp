import { Outlet } from "react-router-dom";

import Navvar from "../navvar/Navvar";



const Root = () => {
    return (
        <div>
        <Navvar></Navvar>
         <div className="py-10">
          
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Root;