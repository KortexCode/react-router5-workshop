import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Menu } from "./Menu";
import { HomePage } from "../page/HomePage";
import { BlogPage } from "../page/BlogPage";
import { GameShopPage } from "../page/GameShopPage";
import { CategoryPage } from "../page/CategoryPage";
import { Item } from "../page/CategoryPage";

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
                 <Route path="/category/:name">
                    <Item/>        
                 </Route>
                 <Route path="/:id">
                      <p>This text will render for any route other than '/'</p>
                 </Route>
            </Switch>
       </>
    )
}

export {App}