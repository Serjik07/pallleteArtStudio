const button = document.querySelector(".menuBtn");
const menu = document.querySelector(".hamburger-menu");
button.addEventListener("click",() => {
    menu.classList.add("active");
    document.body.style.overflowY = 'hidden';
})

const closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener("click",() => {
    document.body.style.overflowY = 'auto';
    menu.classList.remove("active");
})
