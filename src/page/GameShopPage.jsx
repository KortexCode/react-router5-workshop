import React from "react";
function GameShopPage(){
    const handleNavigate = ()=>{
        window.history.go("-1");
    }
    return(
        <>
            <h2>Game Shop Page</h2>
            <button type="button" onClick={handleNavigate}>Go back</button>
        </>
    )
}

export {GameShopPage}