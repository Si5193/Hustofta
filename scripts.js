document.addEventListener('DOMContentLoaded', function() {
    // Scroll to section
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth
