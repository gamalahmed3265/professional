document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    function toggleMobileMenu() {
        mobileMenuDrawer.classList.toggle('translate-x-full');
        mobileMenuOverlay.classList.toggle('hidden');
    }

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    closeMobileMenu.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu); // Close when clicking outside

    // Dropdown toggles for mobile menu
    const academicProgramsMobileToggle = document.getElementById('academic-programs-mobile-toggle');
    const academicProgramsMobileDropdown = document.getElementById('academic-programs-mobile-dropdown');
    academicProgramsMobileToggle.addEventListener('click', () => {
        academicProgramsMobileDropdown.classList.toggle('hidden');
        academicProgramsMobileToggle.querySelector('.fa-chevron-down').classList.toggle('rotate-180');
    });

    const coursesMobileToggle = document.getElementById('courses-mobile-toggle');
    const coursesMobileDropdown = document.getElementById('courses-mobile-dropdown');
    coursesMobileToggle.addEventListener('click', () => {
        coursesMobileDropdown.classList.toggle('hidden');
        coursesMobileToggle.querySelector('.fa-chevron-down').classList.toggle('rotate-180');
    });

    const moreMobileToggle = document.getElementById('more-mobile-toggle');
    const moreMobileDropdown = document.getElementById('more-mobile-dropdown');
    moreMobileToggle.addEventListener('click', () => {
        moreMobileDropdown.classList.toggle('hidden');
        moreMobileToggle.querySelector('.fa-chevron-down').classList.toggle('rotate-180');
    });
});



 // JavaScript for Tabs
 document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all buttons and hide all content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));

            // Activate clicked button
            button.classList.add('active');

            // Show corresponding content
            const targetTab = button.dataset.tab;
            document.getElementById(`tab-${targetTab}`).classList.remove('hidden');
        });
    });

    // JavaScript for FAQ Accordion
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('i');

            // Close other open FAQ items
            faqToggles.forEach(otherToggle => {
                if (otherToggle !== toggle && !otherToggle.nextElementSibling.classList.contains('hidden')) {
                    otherToggle.nextElementSibling.classList.add('hidden');
                    otherToggle.querySelector('i').classList.replace('fa-minus', 'fa-plus');
                }
            });

            // Toggle current FAQ item
            content.classList.toggle('hidden');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        });
    });


    // Swiper for Related Course
});