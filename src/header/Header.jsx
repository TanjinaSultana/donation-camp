
import { NavLink} from "react-router-dom";


const Header = () => {
    
     
     const link =  <>
      <li ><NavLink to='/' className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : " font-normal text-sm"
  }>Home</NavLink></li>
     <li><NavLink to='/donation' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : "font-normal text-sm"
  }>Donation</NavLink></li>
     <li><NavLink to="/statistics"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : "font-normal text-sm"
  }>Statistics</NavLink>
    </li>
     </>
    return (

        <div className="  bg-no-repeat bg-cover relative h-[600px]" style={{backgroundImage: 'url(../public/assets/Resources/Clothing.png) ' }}>

             <div className="hero-overlay absolute inset-0 bg-base-100 bg-opacity-90 ">
          
<div className="navbar mt-10">
  <div className="flex flex-row md:flex-row  lg:flex-1">
    <a className="btn btn-ghost normal-case text-xl">
        <img className="" src="../public/assets/Resources/Logo.png" alt="logo"></img>
    </a>
  </div>
  <nav className="flex-none">
    <ul className="menu  menu-horizontal px-1 ">
  {link}
    </ul>
  </nav>
</div>
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