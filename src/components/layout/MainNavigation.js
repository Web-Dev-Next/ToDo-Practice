import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <div>
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
