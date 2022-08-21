import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavouritesPage from "./pages/FavouritesPage";
import NewMeetupsPage from "./pages/NewMeetupsPage";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
