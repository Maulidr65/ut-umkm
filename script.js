// Slider functionality
let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');

    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Auto-advance slider every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Add slideInUp animation to CSS
const slideInUpStyle = document.createElement('style');
slideInUpStyle.innerHTML = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(slideInUpStyle);

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade in animation on scroll for product cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add animation on page load for navbar
window.addEventListener('load', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.animation = 'slideDown 0.6s ease';
});

// Add animation on page load for main heading
window.addEventListener('load', function() {
    const heading = document.querySelector('.products h1');
    if (heading) {
        heading.style.animation = 'fadeInScale 0.8s ease';
    }
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Product card click animation
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 0.4s ease';
        }, 10);
    });
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.innerHTML = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(pulseStyle);

// Scroll animation for footer
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (footerPosition < screenPosition) {
        footer.style.animation = 'fadeIn 0.8s ease';
    }
});

console.log('Animations loaded successfully!');
