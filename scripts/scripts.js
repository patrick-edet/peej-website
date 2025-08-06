document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    const menuItems = document.querySelectorAll('.navbar li');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          item.classList.toggle('open');
        }
      });
    });
  }
});
