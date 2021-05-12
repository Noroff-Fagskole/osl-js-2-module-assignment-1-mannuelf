import { API_URL } from './utils/constants.js';
import { renderProducts } from './ui/renderProducts.js';
import { searchProducts } from './ui/searchProducts.js';
import { displayMessage } from './ui/displayMessage.js';

(async function getProducts() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    const products = json.data;
    console.log('data:', products);
    // render the original state
    renderProducts(products);
    // render the searched state / data
    searchProducts(products);
  } catch (error) {
    displayMessage('error', error, '.products-container');
  }
})();
