import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            userInfo:{
                name:"dummy",
                location:"dummy",
            }
        };

        // console.log(props)
        // console.log(this.props.name+"child constructor called");
    }

    async componentDidMount(){
        // console.log(this.props.name+"child didMount called");
        const data=await fetch("https://api.github.com/users/Ankan-Sadhukhan");

        const json=await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }

    render(){
        return(
            <div className="user-card">

            <h2>{this.state.userInfo.name}</h2>
            <h3>{this.state.userInfo.location}</h3>
            <img src={this.state.userInfo.avatar_url}></img>
            <h4>@sadhukhanankan7</h4>
        </div>
        )
    }
}

export default UserClass;