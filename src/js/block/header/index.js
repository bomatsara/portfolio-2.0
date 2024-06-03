document.addEventListener('DOMContentLoaded', function () {
  const mobMenuBtn = document.querySelector('.mob-menu-btn');
  const htmlEl = document.querySelector('html');
  const mobCloseBtn = document.querySelector('.mob-close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll(
    '.mobile-menu-item .header-menu-link'
  );
  const headerLinks = document.querySelectorAll('.header-menu-link');

  mobMenuBtn.addEventListener('click', toggleMobileMenu);
  mobCloseBtn.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => link.addEventListener('click', handleLinkClick));
  headerLinks.forEach(link => link.addEventListener('click', handleLinkClick));

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('open');
    htmlEl.classList.toggle('menu-opened');
  }

  function handleLinkClick(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      scrollToTarget(targetElement);
      if (mobileMenu.classList.contains('open')) {
        toggleMobileMenu();
      }
    }
  }

  function scrollToTarget(targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  }
});
