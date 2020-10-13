var elSiteNav = document.querySelector('.site-header__bottom');
var elSiteNavToggler = document.querySelector('.site-header__menu-togler');

elSiteNavToggler.addEventListener('click', function () {
  elSiteNav.classList.toggle('site-header__bottom--active');
});