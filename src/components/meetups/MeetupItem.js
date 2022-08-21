import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import { useContext } from "react";
import FavouriteContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouriteCtx = useContext(FavouriteContext);

  const itemIsFavourite = favouriteCtx.itemIsFavouriteHandler(props.id);

  const onToggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouriteCtx.removeFavouriteHandler(props.id);
    } else {
      favouriteCtx.addFavouriteHandler({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={onToggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from Favourite" : "Add Favourite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
