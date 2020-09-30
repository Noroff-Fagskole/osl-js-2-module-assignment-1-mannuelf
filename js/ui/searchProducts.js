import { renderProducts } from "./renderProducts.js";
import filterProducts from "../utils/filterProducts.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredProducts = filterProducts(searchValue, products);
    renderProducts(filteredProducts);
  };
}
