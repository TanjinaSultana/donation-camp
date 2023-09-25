/* eslint-disable react/prop-types */


const Donate = ({datas}) => {
    const  {Cover,Title,Description,Text_button_bg,Price} = datas;
  
    return (
        <>
        <div className="max-w-5xl mx-auto">
            <div style={{
                backgroundImage: `url(${Cover})`}} className="w-[1000px] h-[500px] bg-no-repeat bg-cover relative">
        <p className="hero-overlay absolute inset-0 bg-[#0B0B0B80]  bg-opacity-500 w-full h-[120px] top-[380px]"  >
         <button className="btn mt-10 ml-14 border-none text-[#FFF] font-normal text-sm " style={{
                backgroundColor: Text_button_bg }} >Donate {Price}</button>
        </p>
        </div><div>
                <h2 className="text-[#0B0B0B] font-bold text-2xl py-8">{Title}</h2>
                <p className="font-normal text-base text-[#0B0B0BB2]">{Description}</p>
            </div> 
            </div>
            </>
            
            
            
    );
};

export default Donate;