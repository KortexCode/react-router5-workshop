import React from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";



function HomePage(){

    const {url} = useRouteMatch();
    console.log(url);
    console.log(useRouteMatch());
    return(
        <h2>Homepage</h2>
    )
}

export {HomePage}