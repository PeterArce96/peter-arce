const header = () => {
    const header = document.querySelector('.header');
    const headerNav = document.querySelector('.header-nav');

    const headerNavMenuIcon = document.getElementById('headerNavMenuIcon');
    const headerMenuCloseIcon = document.getElementById('headerMenuCloseIcon');
    const headerNavMenuLinkList = document.querySelector('.header-nav__list');
    const headerNavItems = document.querySelectorAll('.header-nav__item');


    const documentScroll = () =>{
        header.classList.toggle('header--scroll', window.scrollY > 0);
        headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0)
    }

    const openMenu = () => {
        headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
    };
    const closeMenu = () => {
        headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
    };

    document.addEventListener('scroll', documentScroll);
    headerNavMenuIcon.addEventListener('click', openMenu);
    headerMenuCloseIcon.addEventListener('click', closeMenu);
    headerNavItems.forEach((element) =>{
        element.addEventListener('click', closeMenu);
    });
}
export default header;