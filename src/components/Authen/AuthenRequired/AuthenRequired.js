import React from "react";
import Login from "../Login/Login"

const AuthenRequired = (props) => {
    const RequestedComponent = props.requestedComponent;
    let token = window.localStorage.getItem("token");
    if (token) {
        return <RequestedComponent />
    } else {
        return <Login setToken={props.setToken} />
    }
}

export default AuthenRequired;


