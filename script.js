// Navigation scroll effect
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe studio cards
document.querySelectorAll('.studio-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(card);
});

// Add loading animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Image Carousel
const carousels = {};

function initCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    
    // Check if carousel exists
    if (!carousel) {
        console.error(`Carousel with id "${carouselId}" not found`);
        return;
    }
    
    carousels[carouselId] = {
        currentIndex: 0,
        container: carousel.querySelector('.carousel-container'),
        slides: carousel.querySelectorAll('.carousel-slide'),
        indicators: carousel.querySelectorAll('.carousel-indicator')
    };
    
    console.log(`Initialized ${carouselId} with ${carousels[carouselId].slides.length} slides`);
}

function moveCarousel(carouselId, direction) {
    const carousel = carousels[carouselId];
    
    // Safety check
    if (!carousel) {
        console.error(`Carousel "${carouselId}" not initialized`);
        return;
    }
    
    carousel.currentIndex += direction;
    
    if (carousel.currentIndex < 0) {
        carousel.currentIndex = carousel.slides.length - 1;
    } else if (carousel.currentIndex >= carousel.slides.length) {
        carousel.currentIndex = 0;
    }
    
    updateCarousel(carouselId);
}

function goToSlide(carouselId, index) {
    const carousel = carousels[carouselId];
    
    // Safety check
    if (!carousel) {
        console.error(`Carousel "${carouselId}" not initialized`);
        return;
    }
    
    carousel.currentIndex = index;
    updateCarousel(carouselId);
}

function updateCarousel(carouselId) {
    const carousel = carousels[carouselId];
    
    // Safety check
    if (!carousel) {
        console.error(`Carousel "${carouselId}" not initialized`);
        return;
    }
    
    const offset = -carousel.currentIndex * 100;
    carousel.container.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    carousel.indicators.forEach((indicator, index) => {
        if (index === carousel.currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Auto-play carousel
function autoPlayCarousel(carouselId, interval = 5000) {
    setInterval(() => {
        if (carousels[carouselId]) {
            moveCarousel(carouselId, 1);
        }
    }, interval);
}

// Initialize carousels when page loads
window.addEventListener('load', () => {
    initCarousel('storefrontCarousel');
    initCarousel('joyceLoftCarousel');
    autoPlayCarousel('storefrontCarousel', 5000);
    autoPlayCarousel('joyceLoftCarousel', 5000);
});