import { displayMessage } from "./displayMessage.js";

export function renderProducts(products) {
  const productsContainer = document.querySelector('.products-container');

  productsContainer.innerHTML = '';

  if (products.length === 0) {
    displayMessage("is-danger", "sorry buddy nada!!", ".products-container")
  } 
  else {
    products.forEach(product => {
      productsContainer.innerHTML += `
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="${product.image}" alt="${product.name}">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">${product.price}</p>
                  <p class="subtitle is-6">${product.name}</p>
                </div>
              </div>

              <div class="content">
                ${product.description}
              </div>
            </div>
          </div>
        </div>
       `;
    });
  }
}
