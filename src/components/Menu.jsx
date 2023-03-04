import React from "react";
import { Link } from "react-router-dom";

function Menu(){

    return(
        <header>
            <nav className="container-fluid mt-2">
                <ul className="row">
                    <li>
                        <Link to="/blog">Go to Blog</Link>  
                    </li>
                    <li>
                        <Link to="/game-shop">Go to Game Shop</Link>
                    </li>
                    <li>
                        <Link to="/category">Go to Categories</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export {Menu}
