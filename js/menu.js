let menuOpen = document.getElementById("menu-button");
let closeButton = document.getElementById("close-button");
menuOpen.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
let menuContainer = document.getElementById("menu-container");

function openMenu() {
    menuContainer.classList.add("menu-opened")
}

function closeMenu() {
    menuContainer.classList.remove("menu-opened");    
}