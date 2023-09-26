import { useEffect,useState } from "react";
import Donation from "../donation/Donation";



const DonationCard = () => {
    const [donate,setDonate]  = useState([]);
    const [Nofound,setNofound]  = useState(false);
    const[isShow,setIsShow] = useState(false);
    // const[total,setTotal] = useState(0);
   
    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donate'));
        if(donateItem){
            setDonate(donateItem)
       }else{
            setNofound("No Data")
        }
    },[])
    return (
        <div>
           {
           Nofound?<p className=" flex justify-center items-center">{Nofound}</p>:
           (<div>
           <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
            {
               isShow? donate.map((data) =><Donation key={data.id} data={data}></Donation>):
               donate.slice(0,4).map((data) =><Donation key={data.id} data={data}></Donation>)
            }
           
           </div>
        {donate.length>4 && 
        <div className="flex justify-center items-center">

            <button onClick={()=>setIsShow(!isShow)} className={`btn mt-8 normal-case ${isShow ? '' : 'bg-[#009444]'}`}>{isShow ?null : "See More"}</button>
        </div>
        
        }
          </div>
        )}
        
        </div>
    );
};

export default DonationCard;