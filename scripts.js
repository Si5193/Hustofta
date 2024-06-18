document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to section
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - document.querySelector('.header').offsetHeight,
            behavior: 'smooth'
        });
    };

    // Shrink header on scroll
    window.onscroll = function() {
        var header = document.querySelector(".header");
        if (window.scrollY > 100) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
        scrollFunction(); // For back-to-top button visibility
    };

    // Back-to-top button functionality
    function scrollFunction() {
        var topBtn = document.getElementById("topBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    window.topFunction = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // Initialize AOS (Animate on Scroll)
    AOS.init();

    // Initialize Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    // Fade-in effect on scroll
    const sections = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});