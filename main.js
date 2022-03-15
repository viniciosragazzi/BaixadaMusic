(function(){
    const bodyP = document.querySelector('#bodyPage')
    const nav = document.querySelector('nav.navbar')
    const bar = document.querySelector('.navbar-iconArea i')
    const close = document.querySelector('#closeMenu')
    const navLinks = document.querySelectorAll('nav.navbar ul li a')
    bar.addEventListener('click', ()=>{
        nav.classList.add('visible')
        bodyP.classList.add('hidden')
    })
    close.addEventListener('click', ()=>{
        nav.classList.remove('visible')
        bodyP.classList.remove('hidden')
    })

 navLinks.forEach((links)=>{
    links.addEventListener('click', ()=>{
        nav.classList.remove('visible')
        bodyP.classList.remove('hidden')
    })
 })

})()







function changeImg(){
    const imgTag = document.querySelector('.imgSec')
    let img = 1
   setInterval(()=>{
       if(img ==1 ){
           img= 2
       }else{
           img = 1
       }
    imgTag.setAttribute('src', `./assets/img/musico${img}.png`) 
    imgTag.style.opacity= '0'

    setInterval(()=>{
        imgTag.style.opacity= '1'
    },500)
   }, 6000)

}
changeImg()