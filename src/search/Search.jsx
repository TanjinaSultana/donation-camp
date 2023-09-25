/* eslint-disable react/prop-types */


const Search = ({data}) => {
    const  {Cover,Category,Title,Card_bg,Category_bg,Text_button_bg} = data;
    return (
        <div>
           
            <div className={`card w-72  shadow-xl`} style={{backgroundColor:Card_bg}}>
  <figure><img src={Cover} alt="Shoes" className="w-full" /></figure>
  <div className="card-body">
    <h2 className="card-title -mt-4">
             
      <div className="btn text-sm font-semibold " style={{ color:Text_button_bg,backgroundColor:Category_bg}}>{Category}</div>
    </h2>
    <p className={`font-bold`} style={{color:Text_button_bg}}>{Title}</p>
    
  </div>
</div>
        </div>
    );
};

export default Search;