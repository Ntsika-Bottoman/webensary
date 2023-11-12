// Using 'cards' variable from data.js as mock API data

let container = document.querySelector(".container");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// Setting innerHTML of each card in the page container
container.innerHTML = cards
  //  Using map function to place data from each object in data.js
  .map(card => {
  
    return `<div id=product-id-${card.id} class="card">
  <div class="image">
  <div class="prompts">
        <img src="./prompts/x-lg.svg" class="remove-icon" >
        <img onclick="decrement(${card.id})" src="./prompts/dash-lg.svg" class="dash-icon" >
        <div id=${card.id} class="quantity">
        0
        </div>
        <img onclick="increment(${card.id})" src="./prompts/plus.svg" class="plus-icon" >
        <img src="./prompts/heart-fill.svg" class="heart-icon">
      </div>
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

let increment = (id) => {
  let search = basket.find((x)=> x.id === id); 

  if(search === undefined){
    basket.push({
      id: id,
      item: 1,
    });
  }
  else{
    search.item += 1;
  }
    localStorage.setItem("data", JSON.stringify(basket));
    update(id);
};
let decrement = (id) => {
  let search = basket.find((x)=> x.id === id); 

  if(search.item === 0) return;
  else{
    search.item -= 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
    update(id);
};
let update = (id) => {
  let search = basket.find((x)=>x.id === id);
  //console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cart-amount");
  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
};
calculation();