/* eslint-disable react/prop-types */
import swal from 'sweetalert';

const Donate = ({datas}) => {
    const  {Cover,Title,Description,Text_button_bg,Price,id} = datas || {};
  
    const handleAdd =() =>{
        const donationArray = [];
        const donateItem = JSON.parse(localStorage.getItem('donate'));
        if(!donateItem){
            donationArray.push(datas);
            localStorage.setItem('donate',JSON.stringify(donationArray))
            swal("Good job!", "Donation Done!", "success");
        }
        else{

            const isExist = donateItem.find((data)=> data.id === id )
            if(!isExist){

                donationArray.push(...donateItem,datas)
                localStorage.setItem('donate',JSON.stringify(donationArray))
                swal("Good job!", "Donation Done!", "success");
            }
            else{
                swal("warning!", "Duplicate Data Are Not Allowed", "warning");
            }
        }
    }
    return (
        <div>
        <div className=" mt-10  ">
            <div style={{
                backgroundImage: `url(${Cover})`}} className="w-[300px] h-[400px] md:w-[400px] md:h-[400px] lg:w-[1000px] lg:h-[500px] bg-no-repeat bg-cover relative">
        <p className="hero-overlay absolute inset-0 bg-[#0B0B0B80]  bg-opacity-50 h-[90px] w-full lg:h-[120px] top-[380px]"  >
         <button className="btn mt-10 ml-14 border-none text-[#FFF] font-normal text-sm " style={{
                backgroundColor: Text_button_bg }}  onClick={handleAdd}>Donate {Price}</button>
        </p>
        </div><div className='mt-20'>
                <h2 className="text-[#0B0B0B] font-bold text-2xl ">{Title}</h2>
                <p className="font-normal text-base text-[#0B0B0BB2]">{Description}</p>
            </div> 
            </div>
            </div>
            
    );
};

export default Donate;