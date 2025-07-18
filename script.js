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

    // FAQ Akkordeon mit sanfter Animation
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Schließe alle anderen FAQ Items mit Animation
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Öffne/Schließe das geklickte Item mit Animation
            if (!isActive) {
                // Kurze Verzögerung für sanftere Animation
                setTimeout(() => {
                    item.classList.add('active');
                }, 50);
            } else {
                item.classList.remove('active');
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


    
    // Close Calendly popup function
    function closeCalendlyPopup() {
        const calendlyPopup = document.getElementById('calendlyPopup');
        const calendlyIframe = document.getElementById('calendlyIframe');
        if (calendlyPopup) {
            calendlyPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (calendlyIframe) {
            calendlyIframe.src = '';
        }
    }
    
    // Überprüfe ob Calendly-HTML existiert
    console.log('Checking for Calendly HTML elements...');
    const calendlyCheck = document.getElementById('calendlyPopup');
    if (calendlyCheck) {
        console.log('✅ Calendly HTML found:', calendlyCheck);
    } else {
        console.error('❌ Calendly HTML NOT found!');
        console.log('Available elements with "calendly" in ID:', 
            Array.from(document.querySelectorAll('[id*="calendly"]')).map(el => el.id)
        );
    }
    
    // Close Calendly buttons
    const closeCalendly = document.getElementById('closeCalendly');
    if (closeCalendly) {
        closeCalendly.addEventListener('click', closeCalendlyPopup);
    }
    
    // Close Calendly on overlay click
    const calendlyPopup = document.getElementById('calendlyPopup');
    if (calendlyPopup) {
        calendlyPopup.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCalendlyPopup();
            }
        });
    }
    
    // Close Calendly on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && calendlyPopup && calendlyPopup.classList.contains('active')) {
            closeCalendlyPopup();
        }
    });
    
    // Prevent scroll propagation on Calendly content
    const calendlyContent = document.querySelector('.calendly-content');
    if (calendlyContent) {
        calendlyContent.addEventListener('wheel', function(e) {
            e.stopPropagation();
        }, { passive: false });
        
        calendlyContent.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        }, { passive: false });
    }
    
    // Booking Popup Functionality
    const bookingPopup = document.getElementById('bookingPopup');
    const closeBooking = document.getElementById('closeBooking');
    const cancelBooking = document.getElementById('cancelBooking');
    const nextStep = document.getElementById('nextStep');
    const backStep = document.getElementById('backStep');
    const submitBooking = document.getElementById('submitBooking');
    const closeSuccess = document.getElementById('closeSuccess');
    const serviceOptions = document.querySelectorAll('.service-option');
    
    let selectedService = null;
    let currentStep = 1;
    
    // Open booking popup
    function openBookingPopup() {
        bookingPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
        resetBookingForm();
    }
    
    // Close booking popup
    function closeBookingPopup() {
        bookingPopup.classList.remove('active');
        document.body.style.overflow = '';
        resetBookingForm();
    }
    
    // Reset booking form
    function resetBookingForm() {
        selectedService = null;
        currentStep = 1;
        serviceOptions.forEach(option => option.classList.remove('selected'));
        nextStep.disabled = true;
        document.getElementById('selectedServiceName').textContent = '-';
        document.getElementById('selectedServicePrice').textContent = '-';
        
        // Reset form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('notes').value = '';
        
        // Show step 1
        showStep(1);
    }
    
    // Show specific step
    function showStep(step) {
        document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
        document.getElementById(`step${step}`).classList.add('active');
        currentStep = step;
    }
    
    // Service selection
    serviceOptions.forEach(option => {
        option.addEventListener('click', function() {
            serviceOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            selectedService = {
                name: this.querySelector('h4').textContent,
                price: this.querySelector('.service-price').textContent,
                service: this.dataset.service
            };
            
            document.getElementById('selectedServiceName').textContent = selectedService.name;
            document.getElementById('selectedServicePrice').textContent = selectedService.price;
            nextStep.disabled = false;
        });
    });
    
    // Next step
    nextStep.addEventListener('click', function() {
        if (selectedService) {
            console.log('Next button clicked, selected service:', selectedService);
            
            // Speichere selectedService bevor closeBookingPopup() es zurücksetzt
            const serviceToBook = {
                name: selectedService.name,
                price: selectedService.price,
                service: selectedService.service
            };
            
            // Prüfe zuerst ob Calendly-Elemente existieren
            const calendlyIframe = document.getElementById('calendlyIframe');
            const calendlyPopup = document.getElementById('calendlyPopup');
            
            console.log('Calendly elements check:', {
                iframe: calendlyIframe,
                popup: calendlyPopup
            });
            
            if (!calendlyIframe || !calendlyPopup) {
                console.error('Calendly elements not found!');
                alert('Calendly-Elemente nicht gefunden. Bitte laden Sie die Seite neu.');
                return;
            }
            
            // Direkt zum Calendly-Popup weiterleiten statt zum Kontaktformular
            closeBookingPopup();
            
            // Kurze Verzögerung um sicherzustellen, dass das erste Modal geschlossen ist
            setTimeout(() => {
                console.log('Opening Calendly after delay...');
                console.log('Service to book:', serviceToBook);
                
                // Direkte Calendly-Integration ohne Funktionsaufruf
                const baseUrl = "https://calendly.com/leonidas-pyka/30min";
                const params = new URLSearchParams({
                    background_color: "000000",
                    text_color: "FFFFFF",
                    primary_color: "FFD700",
                    hide_landing_page_details: "1",
                    hide_event_type_details: "1",
                    a1: serviceToBook.name
                });
                
                const fullUrl = `${baseUrl}?${params.toString()}`;
                console.log('Calendly URL:', fullUrl);
                
                // Calendly-Elemente direkt verwenden
                calendlyIframe.src = fullUrl;
                
                // Update service display
                const serviceNameElement = document.getElementById('calendlyServiceName');
                const servicePriceElement = document.getElementById('calendlyServicePrice');
                
                console.log('Service display elements:', {
                    nameElement: serviceNameElement,
                    priceElement: servicePriceElement
                });
                
                if (serviceNameElement) {
                    serviceNameElement.textContent = serviceToBook.name;
                }
                
                if (servicePriceElement) {
                    servicePriceElement.textContent = serviceToBook.price;
                }
                
                calendlyPopup.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                console.log('Calendly popup opened successfully');
                console.log('Calendly popup classes:', calendlyPopup.classList.toString());
            }, 100);
        } else {
            console.log('No service selected');
        }
    });
    
    // Back step
    backStep.addEventListener('click', function() {
        showStep(1);
    });
    
    // Submit booking
    submitBooking.addEventListener('click', function() {
        const form = document.querySelector('.booking-form');
        const formData = new FormData(form);
        
        // Validate required fields
        const name = formData.get('name');
        const email = formData.get('email');
        const date = formData.get('date');
        const time = formData.get('time');
        
        if (!name || !email || !date || !time) {
            alert('Bitte füllen Sie alle Pflichtfelder aus.');
            return;
        }
        
        // Show success step
        document.getElementById('finalServiceName').textContent = selectedService.name;
        document.getElementById('finalDate').textContent = date;
        document.getElementById('finalTime').textContent = time;
        
        showStep(3);
    });
    
    // Close buttons
    closeBooking.addEventListener('click', closeBookingPopup);
    cancelBooking.addEventListener('click', closeBookingPopup);
    closeSuccess.addEventListener('click', closeBookingPopup);
    
    // Close on overlay click
    bookingPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            closeBookingPopup();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && bookingPopup.classList.contains('active')) {
            closeBookingPopup();
        }
    });
    
    // Prevent scroll propagation on modal content
    const bookingContent = document.querySelector('.booking-content');
    if (bookingContent) {
        bookingContent.addEventListener('wheel', function(e) {
            e.stopPropagation();
        }, { passive: false });
        
        bookingContent.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        }, { passive: false });
    }
    

    
    // Buchungs-Buttons - jetzt mit Calendly Integration
    const bookingButtons = document.querySelectorAll('.btn-book, .btn-primary');
    bookingButtons.forEach(button => {
        if (button.textContent.includes('Buchen') || button.textContent.includes('Termin vereinbaren')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Prüfe, ob wir in einem Service-Item sind
                const serviceItem = this.closest('.service-item');
                if (serviceItem) {
                    // Direkt aus der Services-Sektion - öffne Calendly
                    const serviceName = serviceItem.querySelector('h3').textContent;
                    
                    // Direkte Calendly-Integration
                    const baseUrl = "https://calendly.com/leonidas-pyka/30min";
                    const params = new URLSearchParams({
                        background_color: "000000",
                        text_color: "FFFFFF",
                        primary_color: "FFD700",
                        hide_landing_page_details: "1",
                        hide_event_type_details: "1",
                        a1: serviceName
                    });
                    
                    const fullUrl = `${baseUrl}?${params.toString()}`;
                    
                    // Calendly-Elemente direkt verwenden
                    const calendlyIframe = document.getElementById('calendlyIframe');
                    const calendlyPopup = document.getElementById('calendlyPopup');
                    
                    if (calendlyIframe && calendlyPopup) {
                        calendlyIframe.src = fullUrl;
                        
                        // Update service display
                        const serviceNameElement = document.getElementById('calendlyServiceName');
                        const servicePriceElement = document.getElementById('calendlyServicePrice');
                        
                        if (serviceNameElement) {
                            serviceNameElement.textContent = serviceName;
                        }
                        
                        if (servicePriceElement) {
                            servicePriceElement.textContent = serviceItem.querySelector('.price').textContent;
                        }
                        
                        calendlyPopup.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    } else {
                        window.open(fullUrl, '_blank');
                    }
                } else {
                    // Aus anderen Bereichen - öffne normales Buchungs-Modal
                    openBookingPopup();
                }
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