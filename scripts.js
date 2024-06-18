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

    document.getElementById('quote-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getFör att skapa en hemsida där alla sektioner finns på huvudsidan och användaren kan scrolla mellan dem genom att klicka på länkarna i menyn, samt med fade-in animationer för sektioner och ett fungerande kontaktformulär, kan du följa dessa steg:

### HTML
```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hustofta Smide & Mekaniska</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="video-container">
        <video autoplay muted loop playsinline id="background-video">
            <source src="https://videos.pexels.com/video-files/5846583/5846583-hd_1080_1920_25fps.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <header id="header" class="header">
        <div class="logo">
            <img src="https://i.imgur.com/mPm0gZh.png" alt="Logotyp" class="header-logo">
        </div>
        <nav class="navbar" id="navbar">
            <a href="#home">Hem</a>
            <a href="#about">Om oss</a>
            <a href="#quote">Offertförfrågan</a>
            <a href="#contact">Kontakt</a>
        </nav>
        <div class="hamburger" id="hamburger">
            <i class="fas fa-bars"></i>
        </div>
    </header>
    <section id="home" class="section home-section">
        <div class="hero-content">
            <div class="centered-logo">
                <img src="https://i.imgur.com/mPm0gZh.png" alt="Logotyp" class="hero-logo">
            </div>
            <button class="hero-button" onclick="scrollToSection('contact')">Kontakta oss</button>
            <button class="hero-button" onclick="scrollToSection('quote')">Begär offert</button>
        </div>
    </section>
    <section id="about" class="section fade-in">
        <h2>Om oss</h2>
        <p>Hustofta Smide & Mekaniska är ditt förstahandsval för svetsreparationer, metallbearbetning och nyproduktioner. Drivet av Alexander och Stefan, kombinerar vårt familjeföretag erfarenhet och modern teknik för att leverera högkvalitativa lösningar. Med verkstad mellan Höganäs och Ingelsträde, är vi redo för ditt nästa projekt. Välj oss för pålitlighet och överlägsen service.</p>
        <button class="section-button" onclick="scrollToSection('contact')">Kontakta oss</button>
    </section>
    <section id="quote" class="section fade-in">
        <h2>Offertförfrågan</h2>
        <form id="quote-form" class="quote-form">
            <label for="name">Namn:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">E-post:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Beskrivning:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit" class="form-button">Skicka</button>
        </form>
    </section>
    <section id="contact" class="section fade-in">
        <h2>Kontakt</h2>
        <p>Kontaktuppgifter och formulär för att nå oss...</p>
    </section>
    <footer class="footer">
        <p>&copy; 2024 Smidesföretag. Alla rättigheter förbehållna.</p>
        <p>Kontakt: <a href="tel:+46761072796">076-1072796</a> | <a href="mailto:info@hustoftasmide.se">info@hustoftasmide.se</a></p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
