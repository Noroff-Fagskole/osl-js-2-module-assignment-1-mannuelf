import { WISH_LIST_KEY } from "../utils/constants.js";
import { displayMessage } from "./displayMessage.js";
import { getWishList } from "../utils/wishlist.js";

const wishlist = getWishList();

export function renderProducts(products) {
  const productsContainer = document.querySelector('.products-container');

  productsContainer.innerHTML = "";

  if (products.length === 0) {
    displayMessage("is-danger", "sorry buddy nada!!", ".products-container")
  } else {
    products.forEach(product => {
      const hasFavs = wishlist.find(function (fav) {
        return parseInt(fav.id) === product.id;
      });

      const cssClass = hasFavs ? "fa" : "far";

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
                <div class="media-content product">
                  <i class="${cssClass} fa-heart add-wish-list"
                  data-id="${product.id}"
                  data-name="${product.name}"
                  data-price="${product.price}"
                  data-photo="${product.image}"></i>

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

  const wishlistButtons = document.querySelectorAll(".product i");

  wishlistButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick() {
    console.log(this);
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = this.dataset.price;
    const photo = this.dataset.photo;

    const currentFavs = getWishList();

    const productExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (productExists === undefined) {
      const product = { id: id, name: name, price: price, photo: photo };
      currentFavs.push(product);
      saveToWishList(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveToWishList(newFavs);
    }
  }

  function saveToWishList(favs) {
    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(favs));
  }


}
