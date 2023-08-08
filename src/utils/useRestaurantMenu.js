import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { useSearchParams } from "react-router-dom";


const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]= useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json);

    }



    return resInfo.data;
}

export default useRestaurantMenu;