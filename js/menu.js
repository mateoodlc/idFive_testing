let menuOpen = document.getElementById("menu-button");
menuOpen.addEventListener('click', openMenu);

function openMenu() {
    var menuContainer = document.getElementById("menu-container");
    menuContainer.classList.add("menu-opened")
}