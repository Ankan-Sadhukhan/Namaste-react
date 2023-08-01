import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{
    const [Listofrest,setListofrest]=useState(resList);

    return(
        <div className="body">
            <div className="search"> <button onClick={()=> {
                const filterdata=Listofrest.filter((data)=>data?.info?.avgRating >4.3);
                setListofrest(filterdata);

            }}>Top Rated Restairant</button> </div>
            <div className="res-container">
                {
                Listofrest.map((res)=> (<RestaurantCard key={res?.info?.id} resData={res} />))
                }
            </div>

        </div>
    )
}
export default Body;