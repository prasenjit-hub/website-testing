// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
function animateOnScroll() {
    // Don't animate product cards on shop page as they have their own animation
    let selector = '.category-card, .feature-card, .testimonial-card, .gallery-item';
    
    // Add product cards only if we're not on the shop page
    if (!document.body.classList.contains('shop-page')) {
        selector += ', .product-card';
    }
    
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.category-card, .product-card, .feature-card, .testimonial-card, .gallery-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on load as well
    
    // Ensure elements that are already visible on page load get animated
    setTimeout(() => {
        animateOnScroll();
    }, 100);
});

// WhatsApp button functionality
document.querySelector('.whatsapp-button a').addEventListener('click', function(e) {
    e.preventDefault();
    // In a real implementation, this would open WhatsApp
    alert('WhatsApp ordering functionality would open here');
});

// Product order buttons
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        alert(`Order placed for ${productName}! We'll contact you shortly.`);
    });
});
