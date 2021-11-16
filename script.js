const body = document.querySelector('body');
const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header-menu');
if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
        // document.body.classList.toggle('lock'); 
        burgerMenu.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
}

const menuLinks = document.querySelectorAll('.header-menu-item-links[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', onMenuLinksClick);
    });
    
    function onMenuLinksClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);

            window.scrollTo({
                behavior: "smooth"
            });
            e.preventDefault();

            if (burgerMenu.classList.contains('active')) {
                // document.body.classList.remove('lock');
                burgerMenu.classList.remove('active');
                headerMenu.classList.remove('active');
            }
        }
    }     
}
