let shop = document.getElementById("shop");

console.log(shop);

// Using 'cards' variable from data.js as mock API data
let container = document.querySelector(".container");

// Setting innerHTML of each card in the page container
container.innerHTML = cards
  // Using map function to place data from each object in data.js
  .map(card => {
    return `<div class="card">
      <div class="image">
        <div class="prompts">
          <img src="./prompts/x-lg.svg">
          <img src="./prompts/dash-lg.svg">
          <div class="quantity">0</div>
          <img src="./prompts/plus.svg">
          <img src="./prompts/heart-fill.svg">
        </div>
        <div class="cart-icon">
          <p class="cart-text">In Cart</p>
        </div>
        <button class="button show-btn" data-id="${card.id}">Add to cart</button>
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
let cartItems = {}; // Object to store cart items

// Using forEach function to go over all elements with '.card' class
allCards.forEach(each => {
  let button = each.querySelector(".show-btn");
  let cartIcon = each.querySelector(".cart-icon");
  let itemId = button.getAttribute("data-id");

  // onClick function to toggle current button and cart icon
  button.onclick = function() {
    if (button.innerText === "Add to cart") {
      button.innerText = "Remove from cart";
      cartIcon.style.display = "inline-block";
      // Add the item to the cart
      cartItems[itemId] = cartItems[itemId] + 1 || 1;
    } else {
      button.innerText = "Add to cart";
      cartIcon.style.display = "none";
      // Remove the item from the cart
      if (cartItems[itemId] > 0) {
        cartItems[itemId] -= 1;
      }
    }

    // Update the cart item count
    updateCartItemCount();
  };
});

// Function to update the cart item count in the cart icon
function updateCartItemCount() {
  let totalItems = Object.values(cartItems).reduce((total, count) => total + count, 0);
  let cartText = document.querySelector(".cart-text");
  cartText.innerText = totalItems > 0 ? `In Cart (${totalItems})` : "In Cart";
}