// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('bg-white', 'shadow');
    } else {
        document.querySelector('.navbar').classList.remove('bg-white', 'shadow');
    }
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate features on scroll
    const features = document.querySelectorAll('.feature-item');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    features.forEach(feature => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateX(-20px)';
        feature.style.transition = 'all 0.5s ease-in-out';
        observer.observe(feature);
    });
});

// Add pricing hover effects
document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(-10px)';
        }
    });

    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(0)';
        }
    });
});

// FAQ accordion animation
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('.fa-chevron-down');
        if (icon) {
            icon.style.transform = this.classList.contains('collapsed') 
                ? 'rotate(0deg)' 
                : 'rotate(180deg)';
        }
    });
});
