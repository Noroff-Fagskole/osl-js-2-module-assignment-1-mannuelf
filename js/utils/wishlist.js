import { WISH_LIST_KEY } from "../utils/constants.js";

export function getWishList() {
  const wishList = localStorage.getItem(WISH_LIST_KEY);

  if (wishList === null) {
      return [];
  } else {
      return JSON.parse(wishList);
  }
}
