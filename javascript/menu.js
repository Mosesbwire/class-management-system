
const menuIcon = document.getElementById('menu-toggle');


menuIcon.addEventListener('click', toggleMobileMenu)


function toggleMobileMenu(){
    const menu = document.getElementById('menu');
    const closeMenuBtn = document.getElementById('close-menu')

    menu.style.visibility = "visible"
    menu.style.left = "0px"

    closeMenuBtn.addEventListener('click', ()=>{
        menu.style.left = "-350px"
    })
}

