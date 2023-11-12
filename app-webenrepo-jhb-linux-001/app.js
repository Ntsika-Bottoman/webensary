// Using 'cards' variable from data.js as mock API data

let container = document.querySelector(".container");

// Setting innerHTML of each card in the page container
container.innerHTML = cards
  //  Using map function to place data from each object in data.js
  .map(card => {
    return `<div class="card">
  <div class="image">
  <div class="cart-icon">
  <p class="cart-text">In Cart</p>
  </div>
  <button class="button show-btn">Add to cart</button>
  <img src=${card.image} class="thumbnail" alt=${card.title} />
  </div>
  <div class="line"></div>
  <h2 class="title">${card.title}</h2>
  <p class="price">${card.price}</p>
  <div class=${card.rating}>
    <img src="./assets/star.svg" class="star" />
    <img src="./assets/star.svg" class="star" />
    <img src="./assets/star.svg" class="star" />
    <img src="./assets/star.svg" class="star" />
    <img src="./assets/star.svg" class="star" />
  </div>
</div>`;
  })
  .join("");

let allCards = document.querySelectorAll(".card");

// Using forEach function to go over all elements with '.card' class
allCards.forEach(each => {
  let image = each.querySelector(".image");
  let button = image.querySelector(".show-btn");
  let cart = image.querySelector(".cart-icon");
  // onClick function to toggle current button and cart icon
  button.onclick = function() {
    if (button.innerText === "Add to cart") {
      button.innerText = "Remove from cart";
      cart.style.display = "inline-block";
    } else {
      button.innerText = "Add to cart";
      cart.style.display = "none";
    }
  };
});
