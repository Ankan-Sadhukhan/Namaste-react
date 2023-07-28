import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",
            {id:"parent"},[
                React.createElement("h1",
                {id:"child"},
                "I am a h1 tag"),
                React.createElement("h2",
                {id:"child2"},
                "I am a h2 tag")
            ])


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);