let menuButton = document.querySelector('.main_navigation_button')
menuButton.addEventListener('click', () => {
    let menuNavigation = document.querySelector('.header_menu')
    if ( !menuNavigation.classList.contains('mobile_menu')) {
        menuNavigation.classList.add('mobile_menu')
    } else {
        menuNavigation.classList.remove('mobile_menu')
    }
})

let footerNavigation = document.querySelectorAll('.visible_button')
footerNavigation.forEach( el => {
    el.addEventListener('click', () => {
        let parent = el.parentNode
        let element = parent.querySelector('.mobile_footer_menu')
        if (!element.classList.contains('mobile_visible')) {
            element.classList.add('mobile_visible');
            el.classList.add('visible_button_close')
        } else {
            element.classList.remove('mobile_visible');
            el.classList.remove('visible_button_close')
        }
    })
})