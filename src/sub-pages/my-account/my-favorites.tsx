import React from "react";
import FavoriteItem from "../../models/favorite/my-favorite";

const myFavorites = {
  f1: {
    productId: "1",
    favoritesId: "f1",
  },
  f2: {
    productId: "2",
    favoritesId: "f2",
  },
  f3: {
    productId: "3",
    favoritesId: "f3",
  },
};

const myReviewsData = Object.entries(myFavorites);

const FavoriteItems = () => {
	
  return (
    <div>
      {myReviewsData.map(([key, value]) => {
        return (
          <FavoriteItem
						key={value.favoritesId}
            favoritesId={value.favoritesId}
            productId={value.productId}
          />
        );
      })}
    </div>
  );
};

export default FavoriteItems;
