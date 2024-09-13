function showMenu() {
    const menu = document.querySelector(".offcanvas")
    const scroll = document.querySelector("body")
    const overlay = document.querySelector(".overlay")

    menu.classList.toggle("active")
    scroll.classList.toggle("no-scroll")
    overlay.classList.toggle("active")
}