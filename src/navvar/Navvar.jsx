import { NavLink } from "react-router-dom";

const Navvar = () => {
    const link =  <div className="">
      <NavLink to='/' className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg mr-4" : "font-normal text-sm mr-4"
  }>Home</NavLink>
     <NavLink to='/donation' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg mr-4" : "font-normal text-sm mr-4"
  }>Donation</NavLink>
     <NavLink to="/statistics"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg mr-4" : "font-normal text-sm mr-4"
  }>Statistics</NavLink>
    
     </div>
    return (
        <div className="mt-10">
            <div className="navbar  flex flex-col  lg:flex-row ">
  <div className="flex flex-row md:flex-row  lg:flex-1">
    <a className="btn btn-ghost normal-case text-xl">
        <img className="" src="https://i.ibb.co/2FgQvZJ/Logo.png" alt="logo"></img>
    </a>
  </div>
  <nav className="flex-none mt-4 lg:mt-0 ">
    <ul className="menu  menu-horizontal px-1  ">
  {link}
    </ul>
  </nav>
</div>
        </div>
    );
};

export default Navvar;