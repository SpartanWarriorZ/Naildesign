// Lenis Smooth Scroll Initialisierung
const lenis = new Lenis({
  duration: 1.5,
  smooth: true,
  direction: 'vertical',
  gestureDirection: 'vertical',
  smoothTouch: false,
  touchMultiplier: 1.5,
});

console.log('Lenis wurde geladen und initialisiert:', lenis);

function raf(time) {
  lenis.raf(time);
  // Parallax-Effekt für das Hero-Video (Viewport-zentriert auf Mobil)
  const heroVideo = document.querySelector('.hero-background-video');
  if (heroVideo) {
    const scrollY = window.scrollY || window.pageYOffset;
    let parallaxStrength = 0.4;
    if (window.innerWidth <= 768) {
      // Viewport-zentrierter Parallaxeffekt auf Mobil
      const rect = heroVideo.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Mittelpunkt des Viewports um 0px verschieben (zentriert)
      const viewportCenter = windowHeight / 2;
      const videoCenter = rect.top + rect.height / 2;
      const diff = videoCenter - viewportCenter;
      parallaxStrength = 0.55; // Deutlich stärkerer Effekt
      const parallaxY = -diff * parallaxStrength;
      heroVideo.style.transform = `translateY(${parallaxY}px)`;
      heroVideo.style.willChange = 'transform';
      // Video etwas größer machen für mehr Bewegungsspielraum
      heroVideo.style.height = '120vh';
      heroVideo.style.width = '110vw';
      heroVideo.style.left = '-5vw';
      heroVideo.style.position = 'absolute';
      heroVideo.style.top = '0';
      heroVideo.style.right = '0';
      heroVideo.style.zIndex = '-1';
    } else {
      heroVideo.style.transform = `translateY(${scrollY * parallaxStrength}px)`;
      heroVideo.style.willChange = 'transform';
      heroVideo.style.height = '';
      heroVideo.style.width = '';
      heroVideo.style.left = '';
      heroVideo.style.position = '';
      heroVideo.style.top = '';
      heroVideo.style.right = '';
      heroVideo.style.zIndex = '';
    }
  }
  // Parallax-Effekt für das Nagelstudio-Bild im Über-uns-Bereich (zentriert und verstärkt auf Mobil)
  const aboutImage = document.querySelector('.main-image img');
  if (aboutImage) {
    const rect = aboutImage.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Mittelpunkt des Viewports um 80px nach oben verschieben
    const viewportCenter = (windowHeight / 2) - 900;
    const imageCenter = rect.top + rect.height / 2;
    const diff = imageCenter - viewportCenter;
    
    // Verstärkter Parallax-Effekt auf Mobilgeräten
    let parallaxStrength = 0.08;
    if (window.innerWidth <= 768) {
      parallaxStrength = 0.3; // Deutlich stärkerer Effekt auf Mobil
    }
    
    // Zusätzlicher Effekt: Bild bewegt sich langsamer als der Scroll
    const scrollY = window.scrollY || window.pageYOffset;
    const imageOffset = aboutImage.offsetTop;
    const scrollProgress = (scrollY - imageOffset + windowHeight) / (windowHeight + rect.height);
    
    // Kombinierter Parallax-Effekt
    const parallaxY = -diff * parallaxStrength;
    const scrollParallaxY = scrollY * (parallaxStrength * 0.5);
    
    aboutImage.style.transform = `translateY(${parallaxY + scrollParallaxY}px)`;
    aboutImage.style.willChange = 'transform';
  }
  
  // Die Thumbnails bleiben nun fixiert.

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling für Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault();
                lenis.scrollTo(targetId, { offset: 0 });
            }
        });
    });

    // FAQ Akkordeon
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Schließe alle anderen FAQ Items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Öffne das geklickte Item, wenn es nicht bereits aktiv war
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Bildergalerie Navigation
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const prevBtn = document.querySelector('.nav-arrow.prev');
    const nextBtn = document.querySelector('.nav-arrow.next');
        
    let currentImageIndex = 0;
    const images = [
        'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    function updateImage(index) {
        mainImage.src = images[index];
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
        currentImageIndex = index;
    }

    // Thumbnail Klicks
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateImage(index);
        });
    });

    // Navigation Buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
            updateImage(newIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
            updateImage(newIndex);
        });
    }

    // Hamburger-Menü für Mobilgeräte
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        // Menü schließt sich beim Klick auf einen Link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Cookie Banner
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptAllBtn = document.querySelector('.cookie-banner .btn-primary');
    const cookieSettingsBtn = document.querySelector('.cookie-banner .btn-secondary');

    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', function() {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }

    if (cookieSettingsBtn) {
        cookieSettingsBtn.addEventListener('click', function() {
            // Hier könnte eine Cookie-Einstellungsseite geöffnet werden
            alert('Cookie-Einstellungen werden geöffnet...');
        });
    }

    // Verstecke Cookie Banner wenn bereits akzeptiert
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }

    // Smooth Scroll für "Mehr anzeigen" Buttons
    const showMoreButtons = document.querySelectorAll('.btn-secondary');
    showMoreButtons.forEach(button => {
        if (button.textContent.includes('Mehr anzeigen')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Hier könnte mehr Content geladen werden
                this.textContent = 'Wird geladen...';
                setTimeout(() => {
                    this.textContent = 'Alle anzeigen';
                    // Beispiel: Nach dem Laden zu einer Sektion scrollen
                    // lenis.scrollTo('#reviews');
                }, 1000);
            });
        }
    });

    // Buchungs-Buttons
    const bookingButtons = document.querySelectorAll('.btn-book, .btn-primary');
    bookingButtons.forEach(button => {
        if (button.textContent.includes('Buchen') || button.textContent.includes('Termin vereinbaren')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Hier könnte ein Buchungsformular geöffnet werden
                alert('Buchungsformular wird geöffnet...');
            });
        }
    });

    // Navbar Scroll Effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
        
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer für Animationen
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Beobachte alle Sektionen für Fade-in Animationen
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Parallax Effect für Hero Section
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }

    // Service Item Hover Effects
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.2)';
        });
            
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Review Card Hover Effects
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.1)';
        });
            
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Team Member Hover Effects
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
                img.style.borderColor = '#ff1493';
            }
        });
            
        member.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
                img.style.borderColor = '#ff69b4';
            }
        });
    });

    // Loading Animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    // Initial body opacity
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    // Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimierte Scroll Event Handler
    const optimizedScrollHandler = debounce(function() {
        // Scroll-basierte Animationen hier
    }, 10);

    window.addEventListener('scroll', optimizedScrollHandler); 
}); 