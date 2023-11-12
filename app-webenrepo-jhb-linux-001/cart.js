let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
  };

calculation();

let generateCartItems = () => {
    if(basket.length !==0) {
      
    }
    else {
        ShoppingCart.innerHTML = ``;  
        label.innerHTML = `
        <h2>Cart is Empty</2>
        <a href="maindispens copy.html">
          <button class="HomeBtn">Back to Home</button>
        </a>
        `;
    }
};

generateCartItems();