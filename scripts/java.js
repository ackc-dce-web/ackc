// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Registration Form Handling
document.getElementById('competitionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission (in real site, use AJAX/Fetch)
    setTimeout(function() {
        document.getElementById('competitionForm').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
        
        // Optional: Scroll to confirmation
        document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
});