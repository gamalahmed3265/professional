const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const submenuButtons = document.querySelectorAll('.toggle-submenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
    mobileMenuButton.querySelector('svg').classList.toggle('lucide-menu');
    mobileMenuButton.querySelector('svg').classList.toggle('lucide-x');
});

submenuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const submenu = button.nextElementSibling;
        submenu.classList.toggle('hidden');
        const chevron = button.querySelector('svg');
        chevron.classList.toggle('rotate-180');
    });
});
