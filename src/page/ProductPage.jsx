import React from "react";
import { useRouteMatch, Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import { Product } from "../components/Product";
import { useAuth } from "../hook/useAuth";



function ProductPage(){
    const {productData} = useAuth();

    
   /*  const productData = [ ... ]; */
    const { url } = useRouteMatch();
    console.log(url)

    /* Create an array of `<li>` items for each product */
    const linkList = productData.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`${url}/${product.id}`}>{product.name}</Link>
          </li>
        );
    });

    return (
       <div>
            <h2>Product Page</h2>
            <div>
              <div>
                <h3>Products:</h3>
                <ul>{linkList}</ul>
              </div>
            </div>  
            <Route path={`${url}/:productId`}>
              <Product data={productData} />
            </Route>
            <Route exact path={url}>
              <p>Please select a product.</p>
            </Route>
       </div>
    );
    
}

export {ProductPage}