import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [Listofrest,setListofrest]=useState([]);

    const [filterRes,setfilterRes]=useState([]);

    const [searchText,setsearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const JSON =await data.json();

        console.log(JSON);
        setListofrest(JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilterRes(JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    // if(Listofrest.length===0){
    //     return <h1>Loading......</h1>
    // }

    return Listofrest.length ===0 ? (<Shimmer/>) : (
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
                {
                filterRes.map((res)=> (<RestaurantCard key={res?.info?.feeDetails?.id} resData={res?.info} />))
                }
            </div>

        </div>
    )
}
export default Body;