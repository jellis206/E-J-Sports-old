const menu = document.querySelector(".navbar-collapse");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger = document.querySelector(".navbar-toggler");

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

function toggleMenu() {
    if (hamburger.classList.contains("collapsed")) {
        hamburger.classList.remove("collapsed");
        hamburger.ariaExpanded = 'true';
        menu.classList.remove('collapse');
        menu.classList.add('collapsing');
        menu.classList.remove('collapsing');
        menu.classList.add('collapse');
        menu.classList.add('show');

    } else {
        hamburger.classList.add("collapsed");
        hamburger.ariaExpanded = 'false';
        menu.classList.remove('collapse');
        menu.classList.remove('show');
        menu.classList.add('collapsing');
        menu.classList.remove('collapsing');
        menu.classList.add('collapse');
    }
}