import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";

const Header=()=>{

    const [btnName,setbtnName]=useState("Login");
    const onlineStatus = userOnlineStatus();

    return(
        <div className="header flex justify-between bg-purple-200 shadow-md">
            <div className="logo-container">
                <img className="logo h-32" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="flex m-4 p-4"> 
                    <li className="p-4">Online status :{onlineStatus?" 🟢":" 🔴"}</li>
                    <li className="p-4"><Link to="/" >Home</Link></li>
                    <li className="p-4"><Link to="/about" >About Us</Link></li>
                    <li className="p-4"><Link to="/contact" >Contact Us</Link></li>
                    <li className="p-4">Cart</li>
                    <button className="login" onClick={() =>{
                        btnName==="Login"?setbtnName("Logout") : setbtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;