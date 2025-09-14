// Wait for DOM content to be loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
 // Quote rotation logic
     function setupQuoteRotation() {
        const quotes = document.querySelectorAll("#motivation .quote");
        if (!quotes.length) return;
        let index = 0;
        setInterval(() => {
            quotes[index].classList.remove("active");
            quotes[index].classList.add("hidden");
            index = (index + 1) % quotes.length;
            quotes[index].classList.remove("hidden");
            quotes[index].classList.add("active");
        }, 5000); // 5 seconds
    }
    setupQuoteRotation();

    // PAGE NAVIGATION
    window.showPage = function(event, pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));

        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');
        if (event && event.currentTarget) event.currentTarget.classList.add('active');

        // Trigger scroll animations
        observeElements();
    }
    
    // PAGE NAVIGATION
    window.showPage = function(event, pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
    
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
    
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');
        if (event && event.currentTarget) event.currentTarget.classList.add('active');
    
        // Trigger scroll animations
        observeElements();
    }
    
 // Back to top button logic
 function setupBackToTopButton() {
   const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
  backToTopButton.classList.remove('hidden');
} else {
  backToTopButton.classList.add('hidden');
}
});

backToTopButton.addEventListener('click', () => {
 window.scrollTo({
 top: 0, 
 behavior: 'smooth'
  });
 });
}

    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }
    observeElements();
    
    // ANIMATION DELAYS FOR CARDS
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => card.style.animationDelay = `${index * 0.1}s`);
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => card.style.animationDelay = `${index * 0.1}s`);
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => card.style.animationDelay = `${index * 0.1}s`);
    
    // SMOOTH HOVER EFFECTS FOR CARDS
    document.querySelectorAll('.skill-card, .project-card, .blog-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // PARALLAX EFFECT FOR BACKGROUND SHAPES
    document.addEventListener('mousemove', function(e) {
        const shapes = document.querySelectorAll('.shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
    
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 50;
            const y = (mouseY - 0.5) * speed * 50;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // HAMBURGER MENU (MOBILE)
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
