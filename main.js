(function(){
    const nav = document.querySelector('nav.navbar')
    const bar = document.querySelector('.navbar-iconArea i')
    const close = document.querySelector('#closeMenu')
    const navLinks = document.querySelectorAll('nav.navbar ul li a')
    bar.addEventListener('click', ()=>{
        nav.classList.add('visible')
    })
    close.addEventListener('click', ()=>{
        nav.classList.remove('visible')
    })

 navLinks.forEach((links)=>{
    links.addEventListener('click', ()=>{
        nav.classList.remove('visible')
    })
 })

})()