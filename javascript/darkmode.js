const html = document.documentElement;

const modeToggle = document.querySelector("#dark-toggler")

const themeLocalStorage = localStorage.getItem("theme")

if (themeLocalStorage) {
    html.dataset.theme = themeLocalStorage;
}

modeToggle && modeToggle.addEventListener("click", () => {
    html.dataset.theme = html.dataset.theme == "light" ? "dark" : "light";
    localStorage.setItem("theme", html.dataset.theme)
})