  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
