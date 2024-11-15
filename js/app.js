// sidebar code

const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

// theme switch code

let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})

//swiper

let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    },

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    breakpoints:{ 600: {
        slidesPerView: 2,
    },968: {
        slidesPerView: 3,
    },
    },
});