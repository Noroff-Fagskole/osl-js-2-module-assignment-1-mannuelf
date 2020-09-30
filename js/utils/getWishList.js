export function getWishList() {
  const wishList = localStorage.getItem("wishlist");

  if (wishList === null) {
      return [];
  } else {
      return JSON.parse(wishList);
  }
}
