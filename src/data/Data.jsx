/* eslint-disable react/prop-types */

import Datas from "../datas/Datas";
const Data = ({data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-10">
            {
                data?.map((data) => <Datas key={data.id} data={data}></Datas>)
            }
        </div>
    );
};

export default Data;