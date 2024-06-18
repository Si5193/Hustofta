document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.fade-in');
    var options = {
        threshold: 0.5
    };
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(function (section) {
        observer.observe(section);
    });

    var hamburger = document.getElementById('hamburger');
    var navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
