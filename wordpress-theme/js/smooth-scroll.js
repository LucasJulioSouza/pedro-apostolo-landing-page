/**
 * Smooth Scroll Script para Paróquia São Pedro
 */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para links âncora
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajuste para header fixo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de fade-in para elementos quando entram na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos com classe .card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Observar seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Efeito parallax suave no hero
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Header background ao fazer scroll
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'hsl(var(--background) / 0.98)';
                header.style.boxShadow = '0 2px 10px hsl(0 0% 0% / 0.1)';
            } else {
                header.style.background = 'hsl(var(--background) / 0.95)';
                header.style.boxShadow = 'none';
            }
        });
    }
    
    // Formulário de newsletter
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Aqui você pode integrar com um serviço de newsletter
                alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
                this.reset();
            }
        });
    }
    
    // Animação do botão WhatsApp
    const whatsappBtn = document.querySelector('a[href*="wa.me"]');
    if (whatsappBtn) {
        setInterval(() => {
            whatsappBtn.style.animation = 'pulse 2s infinite';
        }, 5000);
    }
});