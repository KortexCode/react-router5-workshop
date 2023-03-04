import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Item = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>{/* {name} */}Nani!!</h3>
    </div>
  );
}

const CategoryPage = (props) => {
  const { url, path } = useRouteMatch();
  console.log(useRouteMatch());

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      {props.children}
    </div>

  );
};

export {Item}
export {CategoryPage};