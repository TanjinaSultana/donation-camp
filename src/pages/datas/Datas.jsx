/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donate from "../../donationDetails/Donate";



const Datas = () => {
    const [datas,setDatas]  = useState({});
    const {id}  = useParams()
    
    const data  = useLoaderData();
   
 
    useEffect(() => {
        const remainData = data?.find((item) => item.id == id);
        setDatas(remainData);
      }, [id, data]);
 //console.log(datas);
    return (
        <div>
            <div>
              <Donate datas={datas}></Donate>
         
            </div>
            
        </div>
    );
};

export default Datas;