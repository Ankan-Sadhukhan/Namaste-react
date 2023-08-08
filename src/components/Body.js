import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";

const Body=()=>{
    const [Listofrest,setListofrest]=useState([]);

    const [filterRes,setfilterRes]=useState([]);

    const [searchText,setsearchText]=useState("");

    const onlineStatus = userOnlineStatus();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const JSON =await data.json();

        // console.log(JSON);
        setListofrest(JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilterRes(JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    // if(Listofrest.length===0){
    //     return <h1>Loading......</h1>
    // }
    // console.log(Listofrest);
    if(onlineStatus===false) return <h1>Looks like You're offline. Check your internet connection</h1>

    return (!Listofrest) ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="search" className="search-box" value={searchText} onChange={(e)=>setsearchText(e.target.value)} />
                    <button onClick={()=>{
                        const filterRestaurant=Listofrest.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilterRes(filterRestaurant);
                    }} >Search</button>
                </div> 
            
            
            <button className="filter-btn" onClick={()=> {
                const filterdata=Listofrest.filter((data)=>data?.info?.avgRating >4);
                setfilterRes(filterdata);

            }}>Top Rated Restairant</button> 
            </div>



            <div className="res-container">
                
                {filterRes.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {
              <RestaurantCard resData={restaurant?.info} />
            }
          </Link>
        ))}
            </div>

        </div>
    )
}
export default Body;