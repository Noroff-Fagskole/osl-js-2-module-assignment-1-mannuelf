import { renderProducts } from './renderProducts.js';
import filterProducts from '../utils/filterProducts.js';

export function searchProducts(products) {
  console.log('searchProducts:', products);
  const search = document.querySelector('.search');

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    console.log('searchValue:', searchValue);
    // create new array of filtered data (products | cards)
    const filteredProducts = filterProducts(searchValue, products);

    renderProducts(filteredProducts);
  };
}
