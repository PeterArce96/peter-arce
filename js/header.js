const header = () => {

    const headerNavMenuIcon = document.getElementById('headerNavMenuIcon');
    const headerMenuCloseIcon = document.getElementById('headerMenuCloseIcon');
    const headerNavMenuLinkList = document.querySelector('.header-nav__list');
    const headerNavItems = document.querySelectorAll('.header-nav__item');



    const openMenu = () => {
        headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
    };
    const closeMenu = () => {
        headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
    };

    headerNavMenuIcon.addEventListener('click', openMenu);
    headerMenuCloseIcon.addEventListener('click', closeMenu);
    headerNavItems.forEach((element) =>{
        element.addEventListener('click', closeMenu);
    });
}
export default header;