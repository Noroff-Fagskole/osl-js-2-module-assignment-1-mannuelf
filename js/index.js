import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

async function getProducts() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const products = json.data;
    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    displayMessage("error", error, ".products-container");
  }
}

getProducts();
