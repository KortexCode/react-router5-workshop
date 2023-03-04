import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Menu } from "./Menu";
import { HomePage } from "../page/HomePage";
import { BlogPage } from "../page/BlogPage";
import { GameShopPage } from "../page/GameShopPage";
import { CategoryPage } from "../page/CategoryPage";
import { Item } from "../page/CategoryPage";
import { ProductPage } from "../page/ProductPage";
import { PrivateRoutePage } from "../page/PrivateRoutePage";
import { Login } from "./Login";
import { Admin } from "./Admin";

function App(){

    return(
        <>
            <Menu></Menu>
            <Switch>
                    <Route exact path="/" component={HomePage}>
                    </Route>
                    <Route path="/blog">
                        <BlogPage/>
                    </Route>
                    <Route path="/game-shop">
                        <GameShopPage/>
                    </Route>
                    <Route path="/category">
                       <CategoryPage>
                           <Route path="/category/:name">
                               <Item/>        
                           </Route>
                       </CategoryPage>    
                    </Route>
                    <Route path="/products">
                       <ProductPage/>     
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/admin" >
                        <PrivateRoutePage />
                    </Route>
                    <Route path="/:id">
                         <p>This text will render for any route other than '/'</p>
                    </Route>
            </Switch>
       </>
    )
}

export {App}