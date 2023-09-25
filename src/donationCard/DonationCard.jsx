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
        //    const totalPrice = donateItem.reduce((preValue,currentItem) => preValue + currentItem.Price,0)
        //    console.log(totalPrice);
        //    //setTotal(totalPrice)


        }else{
            setNofound("No Data")
        }
    },[])
    return (
        <div>
           {
           Nofound?<p className="h-[80vh] flex justify-center items-center">{Nofound}</p>:
           (<div>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {
               isShow? donate.map((data) =><Donation key={data.id} data={data}></Donation>):
               donate.slice(0,4).map((data) =><Donation key={data.id} data={data}></Donation>)
            }
           
           </div>
        {donate.length>4 && 
        
          <button onClick={()=>setIsShow(!isShow)} className="btn bg-[#009444] btn primary text-center mt-8 ml-0 lg:ml-[600px] normal-case">{isShow ?"See Less" : "See More"}</button>
        
        }
          </div>
        )}
        
        </div>
    );
};

export default DonationCard;