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

// Dark Mode
const darkModeToggleEl = document.querySelectorAll('.darkModeToggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    darkModeToggleEl.forEach(element => {
      element.checked = true;
    });
  } else {
    darkModeToggleEl.forEach(element => {
      element.checked = false;
    });
  }
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute("data-color-scheme", theme);
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(userPrefersDark ? 'dark' : 'light');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (!localStorage.getItem('theme')) {
    applyTheme(event.matches ? 'dark' : 'light');
  }
});

darkModeToggleEl.forEach(element => {
  element.addEventListener('change', event => {
    const newTheme = event.target.checked ? 'dark' : 'light';
    applyTheme(newTheme);
  })
});

darkModeToggleEl.forEach(element => {
  element.addEventListener('change', event => {
    const newTheme = event.target.checked ? 'dark' : 'light';
    applyTheme(newTheme);
  });
});