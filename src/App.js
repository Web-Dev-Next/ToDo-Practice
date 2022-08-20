import ToDo from "./components/ToDo";

import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavouritesPage from "./pages/FavouritesPage";
import NewMeetupsPage from "./pages/NewMeetupsPage";

function App() {
  return (
    <div>    
      <Switch>
      <Route path="/" exact={true}>
        <AllMeetupsPage />
      </Route>
      <Route path="/NewMeetups">
        <NewMeetupsPage />
      </Route>
      <Route path="/Favourites">
        <FavouritesPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
