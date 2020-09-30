import { getWishList } from "./utils/getWishList.js";

const wishlist = getWishList();

const productContainer = document.querySelector(".products-container");

if (wishlist.length === 0) {
  productContainer.innerHTML = "No favourites yet";
}

wishlist.forEach(product => {
  console.log(product);
  productContainer.innerHTML += `<div class="column">
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="${product.photo}" alt="${product.name}">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content product">
          <i class="fa fa-heart add-wish-list"
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
</div>`;
});
