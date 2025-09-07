// Wait for DOM content to be loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // QUOTE ROTATION
    let currentQuote = 0;
    const quotes = document.querySelectorAll('.quote');
    const indicators = document.querySelectorAll('.indicator');
    
    function showQuote(index) {
        if (!quotes[index] || !indicators[index]) {
            console.error("Quote or indicator missing at index", index);
            return;
        }
        quotes.forEach(quote => quote.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        quotes[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextQuote() {
        if (quotes.length === 0) return;
        currentQuote = (currentQuote + 1) % quotes.length;
        showQuote(currentQuote);
    }
    
    if (quotes.length && indicators.length && quotes.length === indicators.length) {
        showQuote(currentQuote);
        setInterval(nextQuote, 10000);
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentQuote = index;
                showQuote(currentQuote);
            });
        });
    } else {
        if (quotes.length !== indicators.length) {
            console.warn("Mismatched number of quotes and indicators");
        }
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
