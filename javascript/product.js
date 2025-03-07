import "./darkmode.js"

const id = new URLSearchParams(window.location.search).get("id");


if (id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(product => {
      console.log("Mahsulot ma’lumotlari:", product);
      showProduct(product);
    })
    .catch(error => console.error("Xatolik:", error));
}


const showProduct = (product) => {
  document.getElementById("product-list").innerHTML = `
<a href="#" class="card bg-white w-full shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
    <figure class="relative p-8"> 
        <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-48 object-cover rounded-lg">
        <span class="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs rounded-md">${product.discountPercentage}% OFF</span>
    </figure>
    <div class="card-body p-4">
        <h3 class="font-bold text-lg text-gray-800">${product.title}</h3>
        <p class="description text-gray-600 text-sm">${product.description}</p>
        <div class="flex items-center gap-1 text-yellow-400">
            <i class="fa-solid fa-star"></i>
            <span class="font-semibold">${product.rating}</span>
            <span class="text-gray-500 text-xs">(${product.stock} left)</span>
        </div>
        <div class="flex justify-between items-center mt-2">
            <div class="text-left">
                <del class="text-red-400 text-sm">$${(product.price + 50).toFixed(2)}</del>
                <h3 class="font-bold text-lg text-green-500">$${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</h3>
            </div>
            <button class="btn bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-all">
                <i class="fa-solid fa-cart-plus text-lg"></i> Add
            </button>                
        </div>
    </div>
</a>
    `;
};

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hidden");
  }, 2000);
});
