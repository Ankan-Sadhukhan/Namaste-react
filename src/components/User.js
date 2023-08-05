const User=({name, location})=>{
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>@sadhukhanankan7</h4>
        </div>
    )
}

export default User;