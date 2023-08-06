import { useState } from "react";

const User=({name, location})=>{

    const [count]=useState(0);

    return(
        <div className="user-card">
            <h2>count : {count}</h2>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>@sadhukhanankan7</h4>
        </div>
    )
}

export default User;