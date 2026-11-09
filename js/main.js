// Dynamic header height and active navigation highlighting
const header = document.querySelector('header');
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-link');

// Dynamically calculate and set header height for CSS scroll padding
function setHeaderHeight() {
    if (header) {
        document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    }
}

// Highlight the current section link on scroll
function handleScroll() {
    const headerHeight = header ? header.offsetHeight : 0;
    const scrollPos = window.scrollY + headerHeight + 50;
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;

    let currentSection = '';

    if (atBottom) {
        currentSection = 'contact';
    } else {
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop) {
                currentSection = section.id;
            }
        });
        if (!currentSection) {
            currentSection = 'menu';
        }
    }

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
}

// Initialize on page load and listen for resize and scroll events
window.addEventListener('DOMContentLoaded', () => {
    setHeaderHeight();
    handleScroll();
});

window.addEventListener('resize', setHeaderHeight);
window.addEventListener('scroll', handleScroll);
