import { useState,useEffect } from "react";


const userOnlineStatus=()=>{

    const [status,setstatus]=useState(true);

    useEffect(()=>{

        addEventListener("offline", () => {
            setstatus(false);
        });
        
        addEventListener("online", () => {
            setstatus(true);
        });


    })


    return status;
}

export default userOnlineStatus;