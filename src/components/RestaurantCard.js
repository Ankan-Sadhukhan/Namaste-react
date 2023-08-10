import { CDN_URL } from "../utils/constants";

// const RestaurantCard=(props)=>{
//     const { resData } = props;

//     const {
//     feeDetails,
//     avgRating,
//     cuisines,
//     costForTwo,
//     deliveryTime,
//     badgesV2
//   } = resData;



//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" 
//             src={ CDN_URL+ badgesV2?.cloudinaryImageId}></img>
//             <h3>{feeDetails?.name}</h3>

//             {/* <h4>{cuisines.join(", ")}</h4> */}
//             <h3>{avgRating} stars</h3>
//             <h3>{costForTwo/100} rs</h3>
//             <h3>{deliveryTime} minutes</h3>
//         </div>
//     )
// }

const RestaurantCard = (props) => {
    const { resData } = props;
    // const { loggedInUser } = useContext(UserContext);
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
      deliveryTime,
      badgesV2
    } = resData;
  
    return (
      <div
        className="res-card w-60 m-2 p-3 bg-gray-200 hover:bg-green-100" 
      >
        <img
          className="res-logo rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-lg font-bold py-4">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
        {/* <h4>User : {loggedInUser} </h4> */}
      </div>
    );
  };
  
  // Higher Order Component
  
  // input - RestaurantCard =>> RestaurantCardPromoted
  
//   export const withPromtedLabel = (RestaurantCard) => {
//     return (props) => {
//       return (
//         <div>
//           <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
//             Promoted
//           </label>
//           <RestaurantCard {...props} />
//         </div>
//       );
//     };
//   };
  

export default RestaurantCard;