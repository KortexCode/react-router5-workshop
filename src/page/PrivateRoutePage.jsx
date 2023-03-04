import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { fakeAuth } from '../components/Login';
import { Admin } from "../components/Admin";

const PrivateRoutePage = () => {
    const location = useLocation();

    /* console.log("location", location)
    console.log("permiso", fakeAuth.isAuthenticated)
    console.log("rest", {...rest}); */
    
    return(
        <>
            {fakeAuth.isAuthenticated === true ?
              <Admin />
            :
              <Redirect to={{ pathname: "/login", state: { from: location } }} />
            }
        </>  
    )
        
};

export {PrivateRoutePage};
