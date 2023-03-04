import React from "react";

function BlogPage(){
   
    const handleNavigate = ()=>{
        window.history.go("-1");
     
    }
    return(
        <>
            <h2>BlogPage</h2>
            <button type="button" onClick={handleNavigate}>Go back</button>
        </>
    )
}

export {BlogPage}