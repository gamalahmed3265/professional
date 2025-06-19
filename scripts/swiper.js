document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.myPartnersSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true, // For continuous looping

        // Number of slides per view
        slidesPerView: 1, // Default for mobile
        spaceBetween: 20, // Space between slides

        // If you need pagination
        pagination: {
            el: '.swiper-pagination', // Use the class of your pagination container
            clickable: true, // Make dots clickable
            renderBullet: function (index, className) {
                // This is generally not needed when rtl: true is set on the Swiper instance
                // Swiper handles bullet order correctly in RTL mode.
                return '<span class="' + className + '"></span>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px (sm)
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // when window width is >= 768px (md)
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            // when window width is >= 1024px (lg)
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },

        // Enable RTL mode
        rtl: true,
    });
    new Swiper('.ReviewSwiper', { // Ensure this selector matches your HTML, previously ReviewSwiper
        direction: 'horizontal',
        loop: true,
    
        // Number of slides per view and spacing
        slidesPerView: 1,
        spaceBetween: 20, // Increased for a more distinct card separation on mobile
    
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // Responsive breakpoints for card layout
        breakpoints: {
            // when window width is >= 640px (sm)
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // when window width is >= 768px (md)
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            // when window width is >= 1024px (lg)
            1024: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
    
        rtl: true, // Crucial for RTL behavior
    });
    new Swiper('.mySwiper-related', { // Ensure this selector matches your HTML, previously ReviewSwiper
        direction: 'horizontal',
        loop: true,
    
        // Number of slides per view and spacing
        slidesPerView: 1,
        spaceBetween: 20, // Increased for a more distinct card separation on mobile
    
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // Responsive breakpoints for card layout
        breakpoints: {
            // when window width is >= 640px (sm)
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // when window width is >= 768px (md)
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            // when window width is >= 1024px (lg)
            1024: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
    
        rtl: true, // Crucial for RTL behavior
    });
});