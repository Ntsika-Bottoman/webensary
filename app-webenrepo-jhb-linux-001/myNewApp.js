let shop = document.getElementById("shop");

let cards = [
    {
      id: 01,
      image: "./assets/rob-warner--g7L0BtnB7A-unsplash.jpg",
      title: "Medicinal Flower",
      price: "R279.99",
      rating: "fourStars"
    },
    {
      id: 02,
      image: "./assets/rob-warner-enVUAoS1FOg-unsplash.jpg",
      title: "Medicinal Flower",
      price: "R279.99",
      rating: "threeStars"
    },
    {
      id: 03,
      image: "./assets/rob-warner--g7L0BtnB7A-unsplash.jpg",
      title: "Medicinal Flower",
      price: "R279.99",
      rating: "fiveStars"
    },
    {
      id: 04,
      image: "./assets/blue-dream-vYmv84EI0kVr5.png",
      title: "Hybrid Flower",
      price: "R279.99",
      rating: "fourStars"
    },
    {
      id: 05,
      image: "./assets/AdobeStock_271695140.jpeg",
      title: "Hybrid Flower",
      price: "R279.99",
      rating: "threeStars"
    },
    {
      id: 06,
      image: "./assets/AdobeStock_256536703.jpeg",
      title: "Hybrid Flower",
      price: "R279.99",
      rating: "fiveStars"
    },
    {
      id: 07,
      image: "./assets/AdobeStock_225779977.jpeg",
      title: "Enthuiast",
      price: "R169.99",
      rating: "fourStars"
    },
    {
      id: 08,
      image: "./assets/AdobeStock_202535586.jpeg",
      title: "Enthuiast",
      price: "R279.99",
      rating: "threeStars"
    },
    {
      id: 09,
      image: "./assets/AdobeStock_200131219.jpeg",
      title: "Enthuiast",
      price: "R169.99",
      rating: "fiveStars"
    }
  ];
  

let generateShop = () => {
    return (shop.innerHTML = cards.map((x) => {
    return    `
    <div class="card">
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
</div>
    `
    }).join(""));
}

generateShop();