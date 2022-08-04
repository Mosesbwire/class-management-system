
const menuIcon = document.getElementById('menu-toggle');


menuIcon.addEventListener('click', toggleMobileMenu)


function toggleMobileMenu(){
    const menu = document.getElementById('menu');
    const closeMenuBtn = document.getElementById('close-menu')
    const width = menu.clientWidth;
    

    menu.style.visibility = "visible"
    menu.style.left = "0px"

    closeMenuBtn.addEventListener('click', ()=>{
        let offset = width + 100
        menu.style.left = `-${offset}px`

    })
}

