// for search-bar
// 01st step
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

// 3rd step
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

// 2nd step
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// for login-form
// 4th step
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-contanier');
let formClose = document.querySelector('#form-close');

//5th
formBtn.addEventListener('click', ()=>{
    loginForm.classList.toggle('active');
})
//6th
formClose.addEventListener('click', ()=>{
    loginForm.classList.toggle('active');
})


//Connect menu-bar and nav-bar when width of device is <450
//7th
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

//8th
menu.addEventListener('click', ()=>{
    navBar.classList.toggle('active');
})

menu.onscroll = () => {
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

// video-controls
let videoBtn = document.querySelectorAll('.vid-btn')

videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// slider copied from swiper and some changes made for review section
var swiper = new Swiper(".review-slider", {
    spaceBetween : 20,
    loop: true,
    autoplay: {
        delay : 2500,
        disableonInteraction: false,
    },
    breakpoints : {
        640 : {
            slidesPerView : 1,
        },
        768 : {
            slidesPerView : 2,
        },
        1024 : {
            slidesPerView : 3,
        }
    }
});

// brand swiper section
var swiper = new Swiper(".brand-slider ", {
    spaceBetween : 20,
    loop: true,
    autoplay: {
        delay : 2500,
        disableonInteraction: false,
    },
    breakpoints : {
        450 : {
            slidesPerView : 2,
        },
        768 : {
            slidesPerView : 3,
        },
        991 : {
            slidesPerView : 4,
        },
        1200 : {
            slidesPerView : 5,
        },
    },
});