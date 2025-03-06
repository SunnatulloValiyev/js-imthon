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

