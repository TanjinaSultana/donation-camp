/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const Datas = ({data}) => {
  const  {Cover,Category,Title,Card_bg,Category_bg,id} = data;
  
    return (
        <div >
            <Link to={`/datas/${id}`}>

            <div className={`card w-72 ${Card_bg} shadow-xl`}>
  <figure><img src={Cover} alt="Shoes" className="w-full" /></figure>
  <div className="card-body">
    <h2 className="card-title -mt-4">
             
      <div className={`text-${Category_bg} btn font-bold text-sm`}>{Category}</div>
    </h2>
    <p className={`text-${Category_bg}`}>{Title}</p>
    
  </div>
</div>
            </Link>
        </div>
    );
};

export default Datas;