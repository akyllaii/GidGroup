let callBtn = document.querySelector( '#call')
let call = document.querySelector( '.call')
let callExit = document.querySelector( '.call__exit')


callBtn.onclick = function () {
    call.style.display = 'flex'
}

callExit.onclick = function () {
    call.style.display = 'none'
}

call.onclick = function (e) {
    if (e.target.classList.contains('call')){
        call.style.display = 'none'
    }
}


let menuBurger = document.querySelector('#burgerMenu')
let menuExit = document.querySelector('#menuExit')
let menu = document.querySelector('.menu')

menuBurger.addEventListener('click', function () {
    menu.style.display = 'block'
})

menuExit.addEventListener('click', function () {
    menu.style.display = 'none'
})


let swiperBtn = document.querySelector("#swiperBtn")
let swiperExit = document.querySelector(".swiperExit")
let swiperPrice = document.querySelector(".swiperPrice")

swiperBtn.addEventListener('click' , function () {
    swiperPrice.style.display = 'block'
})

swiperExit.addEventListener('click' , function () {
    swiperPrice.style.display = 'none'
    console.log('asd')
})