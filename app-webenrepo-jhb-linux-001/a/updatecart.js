let shop = document.getElementById("shop");
console.log(shop);

// Using 'cards' variable from data.js as mock API data
let container = document.querySelector(".container");

// Create an array to store cart items
let cartItems = [];

// Function to render a card with a specified quantity
function renderCard(card, quantity, id) {
  return `<div id=product-id-${id} class="card">
    <div class="image">
      <div class="prompts">
        <img src="./prompts/x-lg.svg" class="remove-icon" data-id="${card.id}">
        <img src="./prompts/dash-lg.svg" class="dash-icon" data-id="${card.id}">
        <div id=${id} class="quantity"></div>
        <img src="./prompts/plus.svg" class="plus-icon" data-id="${card.id}">
        <img src="./prompts/heart-fill.svg">
      </div>
      <div class="cart-icon">
        <p class="cart-text">In Cart</p>
      </div>
      
      <img src=${card.image} class="thumbnail" alt=${card.title} />
    </div>
    <div class="line"></div>
    <h2 class="title">${card.title}</h2>
    <p class="price">${card.price}</p>
    <div class=${card.rating}>
      <img src="./assets/star.svg" class="star" />
      <img src="./assets/star.svg" class "star" />
      <img src="./assets/star.svg" class="star" />
      <img src="./assets/star.svg" class="star" />
      <img src="./assets/star.svg" class="star" />
    </div>
  </div>`;
}

// Function to update the cart item count
function updateCartItemCount() {
  let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  let cartText = document.querySelector(".cart-text");
  cartText.innerText = totalItems > 0 ? `In Cart (${totalItems})` : "In Cart";
}

// Render cards and attach event listeners
container.innerHTML = cards.map(card => {
  let cartItem = cartItems.find(item => item.id === card.id);
  return renderCard(card, cartItem ? cartItem.quantity : 0);
}).join("");

let allCards = document.querySelectorAll(".card");

allCards.forEach(each => {
  let button = each.querySelector(".show-btn");
  let plusIcon = each.querySelector(".plus-icon");
  let dashIcon = each.querySelector(".dash-icon");
  let removeIcon = each.querySelector(".remove-icon");
  let itemId = button.getAttribute("data-id");

  // onClick function to toggle current button and cart icon
  button.onclick = function() {
    let cartItem = cartItems.find(item => item.id === itemId);
    if (!cartItem) {
      cartItems.push({ id: itemId, quantity: 1 });
    } else {
      cartItem.quantity++;
    }

    // Update the button text
    button.innerText = `Add ${cartItemIndex.quantity} to cart`;

    updateCartItemCount();
  };

  // Event listener for the plus icon
  plusIcon.addEventListener("click", function() {
    let cartItem = cartItems.find(item => item.id === itemId);
    if (cartItem) {
      cartItem.quantity++;
    }

    // Update the button text
    button.innerText = `Add ${cartItem.quantity} to cart`;

    updateCartItemCount();
  });

  // Event listener for the dash icon
  dashIcon.addEventListener("click", function() {
    let cartItem = cartItems.find(item => item.id === itemId);
    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity--;
    }

    // Update the button text
    button.innerText = cartItem.quantity > 0 ? `Add ${cartItem.quantity} to cart` : 'Add to cart';

    updateCartItemCount();
  });

  // Event listener for the remove icon
  removeIcon.addEventListener("click", function() {
    let cartItemIndex = cartItems.findIndex(item => item.id === itemId);
    if (cartItemIndex !== -1) {
      cartItems.splice(cartItemIndex, 1);
    }

    // Update the button text to 'Add to cart'
    button.innerText = 'Add to cart';

    updateCartItemCount();
  });
});

// Function to calculate the total cart value
function calculateTotalCartValue() {
  let totalValue = cartItems.reduce((total, item) => {
    let card = cards.find(card => card.id === item.id);
    return total + (card.price * item.quantity);
  }, 0);
  return totalValue;
}

// Example of how to calculate the total cart value
let totalCartValue = calculateTotalCartValue();
console.log(`Total Cart Value: $${totalCartValue.toFixed(2)}`);