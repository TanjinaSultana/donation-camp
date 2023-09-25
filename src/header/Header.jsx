/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DataCard from "../datas/DataCard"


const Header = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [category,setCategory]  = useState({});
  const [search,setSearch]  = useState(false);
 
  const data  = useLoaderData();
const handleInput = (e) => {
  setInputValue(e.target.value);
};

const handleButton= () => {

  const remainData = data.filter((item) =>
    item.Category.toLowerCase() === inputValue.toLowerCase()
  );
  setCategory(remainData);
  setSearch(!search);
  setInputValue("");
  
}
    return (
<div>
   
     <div className="  bg-no-repeat bg-cover relative h-[400px]" style={{backgroundImage: 'url(../public/assets/Resources/Clothing.png) ' }}>
    <div className="hero-overlay absolute inset-0 bg-base-100 bg-opacity-90 ">
                      <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-7xl mt-20">
                  <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                  <input type="text" placeholder="Search here" value={inputValue} onChange={handleInput}  className="input text-gray  border-[#DEDEDE] w-48 lg:w-full mt-5 rounded-none" />
                  
              
                  <button className="btn bg-[#FF444A] -ml-2 text-white rounded-none text-sm lg:text-lg  font-normal normal-case" onClick={handleButton}>Search</button>
</div>
</div>
      </div>
      </div>
      <div >
        
            {
              search ? (<div >
                <h1 className="font-bold text-xl mt-8">Searching List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">

              {
              category?.map((data) => (
          <Search key={data.id} data={data} />
        ))}
                </div>
                  </div>):""
            }
                  </div>
   

   

 
       
</div>
    );
};

export default Header;