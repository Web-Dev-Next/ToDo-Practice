import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>Meetups</h1>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        <li>
          <Link to="/new-meetups">New Meetups</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
