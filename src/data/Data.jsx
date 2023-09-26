/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import DataCard from "../datas/DataCard";

const Data = ({data}) => {
   
    return (
        <div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-10">
            {
                data?.map((data) => <DataCard key={data.id} data={data}></DataCard> )
            }
        </div>
       
        </div>
    );
};

export default Data;