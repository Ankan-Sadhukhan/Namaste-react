import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <>
        <h1>About Us</h1>
        <h2>
            Hi Welcome to my Page
        </h2>
        <User name={"Ankan Sadhukhan"} location={"Kolkata"} />
        <UserClass name={"Ankan Sadhukhan class"} location={"Kolkata - beleghta"}/>
        </>
    )
}

export default About;