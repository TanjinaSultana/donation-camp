/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import StatisticsChart from "../pages/statistics/StatisticsChart";
import { useState,useEffect } from "react";

const Statistics = () => {
     const[total,setTotal] = useState(0);
     useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donate'));
        if(donateItem){
            
           //const totalPrice = donateItem.reduce((preValue,currentItem) => preValue + currentItem.Price,0)
          
          
           setTotal(donateItem.length);


        }
    },[])
    return (
        <div>
            
           <StatisticsChart total={total}></StatisticsChart>
        </div>
    );
};

export default Statistics;