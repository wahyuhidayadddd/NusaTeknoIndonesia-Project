// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
const dropdown = document.getElementById('dropdown');
const layananLink = document.querySelector('.group');

layananLink.addEventListener('mouseenter', () => {
    dropdown.classList.add('active'); // Tampilkan dropdown saat mouse masuk
});

layananLink.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active'); // Sembunyikan dropdown saat mouse keluar
});

// Menyembunyikan dropdown jika mouse keluar dari dropdown
dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active'); // Sembunyikan dropdown saat mouse keluar dari dropdown
});
