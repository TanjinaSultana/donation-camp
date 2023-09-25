/* eslint-disable react/prop-types */


const Donation = ({data}) => {
    const  {Cover,Category,Title,Card_bg,Category_bg,id,Text_button_bg,Price} = data;
    return (
        <div className="">
           <div className=" card w-[550px] h-[200px] lg:card-side bg-base-100 shadow-xl mt-10 " style={{backgroundColor:Card_bg}}>
  <figure><img src={Cover} alt="Album"/></figure>
  <div className="card-body py-4">
    <h2 className="card-title badge btn  text-base normal-case" style={{backgroundColor:Category_bg,color:Text_button_bg}}>{Category}</h2>
   
    <h2 className="text-[#0B0B0B] text-sm font-bold">{Title}</h2>
    <p style={{color:Text_button_bg}} className="text-sm font-semibold">{Price}</p>
    <div className="card-actions justify-start ">
      <button className="btn btn-primary normal-case border-none text-base font-semibold px-4" style={{backgroundColor:Text_button_bg}}>View Details</button>
    </div>
  </div>
  
</div>

        </div>
    );
};

export default Donation;