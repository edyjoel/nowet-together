let btn_menu = document.querySelector('.nav-movil__close')
let menu = document.querySelector('.nav')
let header = document.querySelector('.header')


btn_menu.addEventListener('click', function(){

    if(menu.classList.contains('active')) {
        
        
        btn_menu.classList.remove('rotate_180')
        
        menu.classList.remove('opacity_1')
        
        setTimeout(() => {
            header.classList.remove('header-movil')
            menu.classList.remove('active')
        }, 400);
      
    }else {
        menu.classList.add('active')
        header.classList.add('header-movil')
        btn_menu.classList.add('rotate_180')
        setTimeout(() => {
            menu.classList.add('opacity_1')
        }, 100);

    }
    

})

// full page

if(window.innerWidth > 768)  {
    let myFullpage = new fullpage('#main', {
        anchors: ['inicio', 'negocio', 'servicios', 'nosotros', 'contacto', 'landing', 'you'],
        menu: '#header'
    });
}


