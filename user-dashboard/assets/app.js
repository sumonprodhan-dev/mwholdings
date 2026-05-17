document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
    const sidebar = document.querySelector('.app-sidebar');
    const icon = toggleButton.querySelector('i');

    const currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    toggleButton.addEventListener('click', function (e) {
        e.preventDefault();
        const newTheme = htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    function applyTheme(theme) {
        htmlElement.setAttribute('data-bs-theme', theme);

        if (sidebar) {
            sidebar.setAttribute('data-bs-theme', theme);
        }

        if (theme === 'dark') {
            icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        } else {
            icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }

        localStorage.setItem('theme', theme);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const activeLink = document.querySelector('.sidebar-menu .nav-link.active');

    if (activeLink) {
        const activeItem = activeLink.closest('.nav-item');

        if (activeItem) {
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


document.addEventListener("DOMContentLoaded", function () {
    const gridHeader = document.getElementById('grid-header');
    const gridBody = document.getElementById('grid-body');
    const today = new Date();

    const startOfWeek = new Date(today);
    const dayDiff = today.getDay() === 0 ? 6 : today.getDay() - 1;
    startOfWeek.setDate(today.getDate() - dayDiff);

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + i);

        const dayName = currentDate.toLocaleString('en-us', { weekday: 'short' }).toUpperCase();
        const dayNumber = currentDate.getDate();
        const monthName = currentDate.toLocaleString('en-us', { month: 'short' });
        const fullDate = currentDate.toISOString().split('T')[0];

        const isToday = currentDate.toDateString() === today.toDateString();

        // 1. Header Column Insert
        gridHeader.innerHTML += `
            <div class="day-header ${isToday ? 'active' : ''}">
                <span>${dayName}</span>
                <strong>${dayNumber}</strong>
                <small>${monthName}</small>
            </div>
        `;

        // 2. Body Column Insert
        gridBody.innerHTML += `
            <div class="day-slot ${isToday ? 'active-column' : ''}">
                <button type="button" class="add-btn" 
                        data-bs-toggle="modal" 
                        data-bs-target="#addShiftModal" 
                        onclick="openShiftModal('${fullDate}')">
                    +
                </button>
            </div>
        `;
    }
});


$(document).ready(function () {
    var table = $('.datatables').DataTable({
        "pageLength": 10,
        "language": {
            "search": "Search:",
            "searchPlaceholder": "Enter keywords...",
            "lengthMenu": "Display _MENU_ per page",
            "paginate": {
                "next": ">",
                "previous": "<"
            }
        },
        "dom": '<"d-flex justify-content-between align-items-center mb-4 mt-2"lf>rt<"d-flex justify-content-between align-items-center mt-4"ip>',
    });

    $('#statusDropdown').on('change', function () {
        var filterValue = $(this).val();

        if (filterValue === 'all') {
            table.search('').draw();
        } else {
            table.search(filterValue).draw();
        }
    });
});
