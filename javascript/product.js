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
        <a href="#" class="card bg-base-100 w-full shadow-2xl hover:scale-105 transition-all duration-300">
            <figure>
              <img src="${product.thumbnail}" alt="${product.title}">
            </figure>
            <div class="card-body">
              <p class="description">${product.description}</p>
              <p>
                <i class="fa-solid fa-star text-orange-300"></i>
                <span class="rating">${product.rating}</span>
                <span class="review">(${product.stock} left)</span>
              </p>
              <div class="flex justify-between">
                <div>
                  <del class="badge badge-outline badge-error">$${(product.price + 50).toFixed(2)}</del>
                  <h3 class="font-bold badge badge-accent">$${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</h3>
                </div>
                <button class="btn w-15 h-10 badge badge-info rounded-full border-none">
                  <i class="fa-solid fa-cart-plus text-2xl"></i>
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
