import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData} =props;
    const {cuisines,avgRating,feeDetails,sla} =resData.info;
    


    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" 
            src={ CDN_URL+ resData?.info?.cloudinaryImageId}></img>
            <h3>{resData?.info?.name}</h3>

            <h4>{cuisines.join(", ")}</h4>
            <h3>{avgRating} stars</h3>
            <h3>{feeDetails?.totalFee/100} rs</h3>
            <h3>{sla?.deliveryTime} minutes</h3>
        </div>
    )
}

export default RestaurantCard;