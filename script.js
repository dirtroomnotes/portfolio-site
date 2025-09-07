// Quote rotation functionality
let currentQuote = 0;
const quotes = document.querySelectorAll('.quote');
const indicators = document.querySelectorAll('.indicator');

function showQuote(index) {
    quotes.forEach(quote => quote.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    quotes[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
}

// Auto-rotate quotes every 10 seconds
setInterval(nextQuote, 10000);

// Click indicator functionality
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentQuote = index;
        showQuote(currentQuote);
    });
});

// Page navigation
function showPage(event, pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');

    // Trigger scroll animations
    observeElements();
}

// Intersection Observer for scroll animations
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

// Initialize animations and card delays
document.addEventListener('DOMContentLoaded', function() {
    observeElements();

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => card.style.animationDelay = `${index * 0.1}s`);

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => card.style.animationDelay = `${index * 0.1}s`);

    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => card.style.animationDelay = `${index * 0.1}s`);
});

// Smooth hover effects for cards
document.querySelectorAll('.skill-card, .project-card, .blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for background shapes
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

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card-hover");
  card.innerHTML = `
    <div class="card-hover__content">
      <h3 class="card-hover__title">${project.title}</h3>
      <p class="card-hover__text">${project.description}</p>
      <a href="${project.link}" class="card-hover__link">
        <span>Learn More</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>${project.extra}</h4>
    </div>
    <img src="${project.image}" alt="${project.title}">
  `;
  container.appendChild(card);
});

const btn = document.getElementById('mobile-menu-button');
const nav = document.getElementById('nav-links');

btn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

