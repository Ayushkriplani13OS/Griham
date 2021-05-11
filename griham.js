
const loginMenu = document.querySelector('header .active');
const loginShow = document.querySelector('.login-contianer');
const btnClose = document.querySelector('#btn-close');

loginMenu.addEventListener('click', () => {
    loginShow.style.clipPath = 'circle(100% at 50% 50%)';
})

btnClose.addEventListener('click', () => {
    loginShow.style.clipPath = 'circle(0 at 50% 50%)';
})

const btnToggle = document.querySelectorAll('.next-log');
const resForm = document.querySelector('#res');

btnToggle.forEach(item => {
    item.addEventListener('click', () => {
        resForm.classList.toggle('hidden');
    })
})

// Menu toggle
const menuToggle = document.querySelectorAll('header .menu');
const menu = document.querySelector('header ul');

menuToggle.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('menu-toggle');
    })
})

// Banner auto slide-----------------------------
const banner = document.querySelector('.banner');
const images = document.querySelectorAll('.banner img');
const dots = document.querySelectorAll('.banner .nav-dot');
const prev = document.querySelector('.banner .prev');
const next = document.querySelector('.banner .next');

let slideIndex = 0;
slideShow(slideIndex);
function slideShow(n) {
    if (slideIndex > images.length - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' dot-active', '');
    }

    images[slideIndex].style.display = "block";
    dots[slideIndex].className += ' dot-active';
}

dots.forEach((item, index) => {
    item.addEventListener('click', () => {
        slideShow(slideIndex = index);
    })
})

prev.addEventListener('click', () => {
    slideShow(slideIndex -= 1);
})

next.addEventListener('click', () => {
    slideShow(slideIndex += 1);
})
