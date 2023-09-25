/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const Datas = ({data}) => {
  const  {Cover,Category,Title,Card_bg,Category_bg,id} = data;
  
    return (
        <div >
            <Link to={`/datas/${id}`}>

            <div className={`card w-72  shadow-xl`} style={{backgroundColor:Card_bg}}>
  <figure><img src={Cover} alt="Shoes" className="w-full" /></figure>
  <div className="card-body">
    <h2 className="card-title -mt-4">
             
      <div className={`btn font-bold text-sm`} style={{backgroundColor:Card_bg,color:Category_bg}}>{Category}</div>
    </h2>
    <p className={`font-bold`} style={{color:Category_bg}}>{Title}</p>
    
  </div>
</div>
            </Link>
        </div>
    );
};

export default Datas;