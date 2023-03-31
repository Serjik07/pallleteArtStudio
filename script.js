const button = document.querySelector(".menuBtn");
const menu = document.querySelector(".hamburger-menu");
button.addEventListener("click",() => {
    menu.classList.add("active");
})

const closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener("click",() => {
    menu.classList.remove("active");
})
