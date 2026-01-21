(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) {
    console.warn('Mobile menu elements not found');
    return;
  }

  const hideMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    
    // Блокуємо прокрутку body коли меню відкрите
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  };

  openMenuBtn.addEventListener('click', hideMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  // Закриття меню при кліку на посилання
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Закриття меню при зміні розміру екрана (якщо перейшли на десктоп)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Закриття меню при натисканні Escape
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
})();