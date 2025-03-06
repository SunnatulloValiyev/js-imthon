import "./darkmode.js"

import { fetchData } from "./fetchData.js"
import { showCards } from "./updateUI.js";

fetchData("https://dummyjson.com/product")
    .then((data) => {
        showCards(data);
    })
    .catch((error) => {
        console.log(error);
    })


window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    setTimeout(() => {
        loader.style.display = "none";
        content.classList.remove("hidden");
    }, 2000);
});


