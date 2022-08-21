import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

function FavouritesContextProvider(props) {
  
  const [userFavourites, setUserFavourites] = useState([]);
  
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}
