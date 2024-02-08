import fetchAPI from "./fetchAPI.js";
// import loader from "./loader.js";
// if (isLoading) loader();
let products = [];
class Products {
  async getAllProducts() {
    const { isLoading, data } = await fetchAPI(
      "https://fakestoreapi.com/products"
    );
    products = data.data;
    products.forEach((product) => Products.implementaionProduct(product));
  }
  static implementaionProduct(product) {
    const productTag = document.createElement("div");
    productTag.classList.add("card-product");
    productTag.innerHTML = `   
  <div class="card-product__image">
    <img
      src=${product.image}
      alt="apple watch"
    />
    <div class="card-product__add-to-favorite">❤️</div>
  </div>
  <div class="card-product__description">
    <div class="description__properties">
      <div class="property__brand">electronic</div>
      <div class="property__rating">${product.rating.rate} ⭐</div>
    </div>
    <h2 class="description__title">${product.title}</h2>
    <h3 class="description__price">${product.price}$</h3>
    <button class="description__View-and-order btn">
      View and Order
    </button>
  </div>`;
    document.querySelector(".card-products").append(productTag);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const ui = new Products();
  ui.getAllProducts();
});
