const showProduct = (product) => {
    document.getElementById("product-list").innerHTML = `
        <a href="#" class="card bg-white w-full shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <figure class="relative p-2">
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
                    <button class="btn bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-all" onclick="addToCart(${product.id}, '${product.title}', ${product.price})">
                        <i class="fa-solid fa-cart-plus text-lg"></i> Add
                    </button>                
                </div>
            </div>
        </a>
    `;
};


const addToCart = (id, title, price) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    let existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, title, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
};


const updateCartUI = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");

    cartContainer.innerHTML = "";  
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `${item.title} - ${item.quantity} x $${item.price.toFixed(2)}`;
        cartContainer.appendChild(li);
    });
};


window.addEventListener("load", updateCartUI);
