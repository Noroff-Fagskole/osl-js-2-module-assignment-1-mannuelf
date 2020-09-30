import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    console.log("searchValue", typeof searchValue, searchValue);

    const filteredProducts = products.filter(product => {
      const productPrice = parseFloat(product.price);
      const productName = product.name;
      // if productName is equal to what is in the product data return it
      if (productName.toLowerCase().startsWith(searchValue)) return true;

      let parsedNumber = parseFloat(searchValue);
      if (productPrice <= parsedNumber) return true;
    });

    renderProducts(filteredProducts);
  };
}
