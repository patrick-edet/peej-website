  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Toggle dropdown on mobile click
  const menuItems = document.querySelectorAll('.navbar li');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        item.classList.toggle('open');
      }
    });
  });

