import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import { useContext } from "react";
import FavouriteContext from "../../store/favourites-context";

function MainNavigation() {
  const favouritCtx = useContext(FavouriteContext);

  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>Meetups</h1>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetups">New Meetups</Link>
        </li>
        <li>
          <Link to="/favourites">
            Favourites{" "}
            <span className={classes.badge}>{favouritCtx.totalFavourites}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
