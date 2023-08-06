import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);

        // console.log("parent constructor called");
    }

    // componentDidMount(){
    //     console.log("parent didmount called");
    // }

    render(){
        return(
                <>
                {/* {console.log("parent render called")} */}
                <h1>About Us</h1>
                <h3>
                    Hi Welcome to my Page
                </h3>
                {/* <User name={"Ankan Sadhukhan"} location={"Kolkata"} /> */}
                <UserClass />
                </>
            )
    }
}







// const About=()=>{

//     return(
//         <>
//         <h1>About Us</h1>
//         <h2>
//             Hi Welcome to my Page
//         </h2>
//         {/* <User name={"Ankan Sadhukhan"} location={"Kolkata"} /> */}
//         <UserClass name={"Ankan Sadhukhan class"} location={"Kolkata - beleghta"}/>
//         </>
//     )
// }

export default About;