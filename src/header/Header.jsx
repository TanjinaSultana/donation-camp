

import Navvar from "../navvar/Navvar";


const Header = () => {
    
     
     
    return (

  <div className="  bg-no-repeat bg-cover relative h-[600px]" style={{backgroundImage: 'url(../public/assets/Resources/Clothing.png) ' }}>

  <div className="hero-overlay absolute inset-0 bg-base-100 bg-opacity-90 ">
          <div className="hero-content text-center text-neutral-content">
        <div className="max-w-7xl mt-20">
      <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
      <input type="text" placeholder="Search here" className="input text-gray  border-[#DEDEDE] w-full max-w-xs mt-5 rounded-none" />
      <button className="btn bg-[#FF444A] -ml-2 text-white rounded-none text-lg font-normal normal-case">Search</button>

      
    </div>
  </div>
        </div>
        </div>
    );
};

export default Header;