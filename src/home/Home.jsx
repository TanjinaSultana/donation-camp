import { useLoaderData } from "react-router-dom";
import Data from "../data/Data";


const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
        <Data data={data}></Data>
        </div>
    );
};

export default Home;