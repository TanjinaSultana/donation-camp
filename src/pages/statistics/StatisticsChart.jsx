/* eslint-disable react/prop-types */

import { PieChart,Pie,Cell} from 'recharts';


const StatisticsChart = ({total}) => {
     const data = [
      
      { name: "a", value: (total/12)*100 },
      { name: "b", value: 100-(total/12)*100 }
    ];
    
    const COLORS = ["#00C49F","#FF444A" ];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index
    }, any) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(2)}%`}
        </text>
      );
    };
    
      return (
        <div className=''>
            <div >

        <PieChart width={300} height={400} className='mx-auto '>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
          </PieChart>
          <div className=' flex justify-center  '>

          <div className=' flex'>
          <h3 className=' font-bold text-base'>Your Donation : </h3>
            <p className=' w-[50px] h-[20px] bg-[#00C49F]'></p>
          </div>
          <div className='flex'>
          <h3 className=' font-bold text-base'>Total Donation : </h3>
            <p className=' w-[50px] h-[20px] bg-[#FF444A]'></p>
          </div>
          </div>
            </div>
          </div>
          );
    };




export default StatisticsChart;