document.addEventListener('DOMContentLoaded', function () {
    // Hämta alla sektioner som ska ha fade-in-effekter
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

    // Hantera hamburgermenyn för mobila enheter
    var hamburger = document.getElementById('hamburger');
    var navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Funktion för att scrolla till en specifik sektion
    window.scrollToSection = function(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    // Hantera formulärsändning för offertförfrågan
    document.getElementById('quote-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Enkelt sätt att skicka formulärdata via e-post
        var mailto_link = 'mailto:info@hustoftasmide.se?subject=Offertförfrågan&body=' + encodeURIComponent("Namn: " + name + "\nE-post: " + email + "\nBeskrivning:\n" + message);
        window.location.href = mailto_link;
    });
});
