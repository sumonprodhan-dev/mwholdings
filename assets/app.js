window.addEventListener('scroll', function () {
    const nav = document.querySelector('#mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-password-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const inputField = this.closest('.input-group').querySelector('.password-field');
            const icon = this.querySelector('i');

            if (inputField && icon) {
                const isPassword = inputField.getAttribute('type') === 'password';
                inputField.setAttribute('type', isPassword ? 'text' : 'password');

                icon.classList.toggle('bi-eye');
                icon.classList.toggle('bi-eye-slash');
            }
        });
    });
});

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});