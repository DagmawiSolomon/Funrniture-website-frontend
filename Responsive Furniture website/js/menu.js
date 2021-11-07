var hamBurger = document.querySelector('.hamburger')
var navMenu = document.querySelector('.nav-menu')

hamBurger.addEventListener('click', function(){
    hamBurger.classList.toggle("active")
    navMenu.classList.toggle('active')
    console.log("je");
})


