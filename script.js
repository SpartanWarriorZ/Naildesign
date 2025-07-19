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

    // Erweiterte Cookie-Management Funktionalität
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieSettingsModal = document.getElementById('cookieSettingsModal');
    const openCookieSettings = document.getElementById('openCookieSettings');
    const closeCookieSettings = document.getElementById('closeCookieSettings');
    const acceptAllCookies = document.getElementById('acceptAllCookies');
    const acceptAllCookiesModal = document.getElementById('acceptAllCookiesModal');
    const saveCookiePreferences = document.getElementById('saveCookiePreferences');
    
    // Cookie-Kategorien
    const externalCookies = document.getElementById('externalCookies');
    const analyticsCookies = document.getElementById('analyticsCookies');
    
    // Cookie-Einstellungen laden
    function loadCookiePreferences() {
        const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
        
        if (preferences.external !== undefined) {
            externalCookies.checked = preferences.external;
        }
        if (preferences.analytics !== undefined) {
            analyticsCookies.checked = preferences.analytics;
        }
        
        return preferences;
    }
    
    // Cookie-Einstellungen speichern
    function saveCookiePreferencesFunc() {
        const preferences = {
            essential: true, // Immer aktiv
            external: externalCookies.checked,
            analytics: analyticsCookies.checked
        };
        
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        localStorage.setItem('cookiesAccepted', 'true');
        
        // Externe Dienste entsprechend laden/entladen
        if (preferences.external) {
            loadExternalServices();
        }
        
        // Modal schließen
        closeCookieSettingsModal();
        
        // Banner ausblenden
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
        
        console.log('Cookie-Einstellungen gespeichert:', preferences);
    }
    
    // Externe Dienste laden
    function loadExternalServices() {
        console.log('Lade externe Dienste...');
        // Hier können externe Dienste wie Calendly, Maps etc. geladen werden
        // Für jetzt nur ein Log
    }
    
    // Cookie-Settings Modal öffnen
    function openCookieSettingsModal() {
        if (cookieSettingsModal) {
            cookieSettingsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            loadCookiePreferences();
        }
    }
    
    // Cookie-Settings Modal schließen
    function closeCookieSettingsModal() {
        if (cookieSettingsModal) {
            cookieSettingsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Alle Cookies akzeptieren
    function acceptAllCookiesFunc() {
        const preferences = {
            essential: true,
            external: true,
            analytics: true
        };
        
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
            localStorage.setItem('cookiesAccepted', 'true');
        
        // Externe Dienste laden
        loadExternalServices();
        
        // Banner ausblenden
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
        
        // Modal schließen falls offen
        closeCookieSettingsModal();
        
        console.log('Alle Cookies akzeptiert');
    }
    
    // Event Listeners
    if (openCookieSettings) {
        openCookieSettings.addEventListener('click', openCookieSettingsModal);
    }
    
    if (closeCookieSettings) {
        closeCookieSettings.addEventListener('click', closeCookieSettingsModal);
    }
    
    if (acceptAllCookies) {
        acceptAllCookies.addEventListener('click', acceptAllCookiesFunc);
    }
    
    if (acceptAllCookiesModal) {
        acceptAllCookiesModal.addEventListener('click', acceptAllCookiesFunc);
    }
    
    if (saveCookiePreferences) {
        saveCookiePreferences.addEventListener('click', saveCookiePreferencesFunc);
    }
    
    // Modal schließen bei Overlay-Klick
    if (cookieSettingsModal) {
        cookieSettingsModal.addEventListener('click', function(e) {
            if (e.target === cookieSettingsModal) {
                closeCookieSettingsModal();
            }
        });
    }
    
    // Modal schließen bei Escape-Taste
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cookieSettingsModal && cookieSettingsModal.classList.contains('active')) {
            closeCookieSettingsModal();
        }
    });
    
    // Cookie-Banner anzeigen/verstecken basierend auf gespeicherten Einstellungen
    const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
    if (Object.keys(savedPreferences).length > 0 || localStorage.getItem('cookiesAccepted') === 'true') {
        // Cookies wurden bereits verwaltet
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
        
        // Externe Dienste laden falls akzeptiert
        if (savedPreferences.external) {
            loadExternalServices();
        }
    } else {
        // Cookie-Banner anzeigen
        if (cookieBanner) {
            cookieBanner.style.display = 'block';
        }
    }

    // Team Modal Funktionalität
    const teamModal = document.getElementById('teamModal');
    const closeTeamModal = document.getElementById('closeTeamModal');
    const teamModalImage = document.getElementById('teamModalImage');
    const teamModalName = document.getElementById('teamModalName');
    const teamModalPosition = document.getElementById('teamModalPosition');
    const teamMemberImages = document.querySelectorAll('.team-member img');

    // Team Modal öffnen
    function openTeamModal(imageSrc, name, position) {
        teamModalImage.src = imageSrc;
        teamModalImage.alt = name;
        teamModalName.textContent = name;
        teamModalPosition.textContent = position;
        teamModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Team Modal schließen
    function closeTeamModalFunc() {
        teamModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event Listeners für Team Member Bilder
    teamMemberImages.forEach(member => {
        member.addEventListener('click', function() {
            const name = this.alt;
            const imageSrc = this.src;
            const position = this.closest('.team-member').querySelector('p').textContent;
            openTeamModal(imageSrc, name, position);
        });
    });

    // Modal schließen
    if (closeTeamModal) {
        closeTeamModal.addEventListener('click', closeTeamModalFunc);
    }

    // Modal schließen bei Overlay-Klick
    if (teamModal) {
        teamModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeTeamModalFunc();
            }
        });
    }

    // Modal schließen bei Escape-Taste
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && teamModal && teamModal.classList.contains('active')) {
            closeTeamModalFunc();
        }
    });

    // Rating Bars Animation bei Stern-Hover
    const starsLarge = document.querySelector('.stars-large');
    const ratingBars = document.querySelector('.rating-bars');
    
    if (starsLarge && ratingBars) {
        starsLarge.addEventListener('mouseenter', function() {
            ratingBars.classList.add('stars-hovered');
        });
        
        starsLarge.addEventListener('mouseleave', function() {
            ratingBars.classList.remove('stars-hovered');
        });
    }

    // Review Form Modal Funktionalität
    const reviewFormModal = document.getElementById('reviewFormModal');
    const openReviewForm = document.getElementById('openReviewForm');
    const closeReviewForm = document.getElementById('closeReviewForm');
    const cancelReview = document.getElementById('cancelReview');
    const reviewForm = document.getElementById('reviewForm');
    const starRating = document.querySelector('.star-rating');
    const ratingText = document.querySelector('.rating-text');
    let selectedRating = 0;

    // Review Form öffnen
    function openReviewFormFunc() {
        reviewFormModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        resetReviewForm();
    }

    // Review Form schließen
    function closeReviewFormFunc() {
        reviewFormModal.classList.remove('active');
        document.body.style.overflow = '';
        resetReviewForm();
    }

    // Review Form zurücksetzen
    function resetReviewForm() {
        selectedRating = 0;
        reviewForm.reset();
        updateStarDisplay();
        updateRatingText();
    }

    // Sterne aktualisieren
    function updateStarDisplay() {
        const stars = starRating.querySelectorAll('i');
        stars.forEach((star, index) => {
            if (index < selectedRating) {
                star.classList.remove('far');
                star.classList.add('fas');
                star.classList.add('active');
            } else {
                star.classList.remove('fas');
                star.classList.remove('active');
                star.classList.add('far');
            }
        });
    }

    // Rating Text aktualisieren
    function updateRatingText() {
        const texts = [
            'Klicken Sie auf die Sterne',
            'Sehr schlecht',
            'Schlecht',
            'Okay',
            'Gut',
            'Sehr gut'
        ];
        ratingText.textContent = texts[selectedRating];
    }

    // Event Listeners für Sterne
    if (starRating) {
        starRating.addEventListener('click', function(e) {
            if (e.target.tagName === 'I') {
                selectedRating = parseInt(e.target.dataset.rating);
                updateStarDisplay();
                updateRatingText();
            }
        });

        // Hover-Effekt für Sterne
        starRating.addEventListener('mouseover', function(e) {
            if (e.target.tagName === 'I') {
                const hoverRating = parseInt(e.target.dataset.rating);
                const stars = starRating.querySelectorAll('i');
                stars.forEach((star, index) => {
                    if (index < hoverRating) {
                        star.classList.remove('far');
                        star.classList.add('fas');
                    } else {
                        star.classList.remove('fas');
                        star.classList.add('far');
                    }
                });
            }
        });

        starRating.addEventListener('mouseout', function() {
            updateStarDisplay();
        });
    }

    // Event Listeners für Modal
    if (openReviewForm) {
        openReviewForm.addEventListener('click', openReviewFormFunc);
    }

    if (closeReviewForm) {
        closeReviewForm.addEventListener('click', closeReviewFormFunc);
    }

    if (cancelReview) {
        cancelReview.addEventListener('click', closeReviewFormFunc);
    }

    // Modal schließen bei Overlay-Klick
    if (reviewFormModal) {
        reviewFormModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeReviewFormFunc();
            }
        });
    }

    // Form Submit
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (selectedRating === 0) {
                alert('Bitte wählen Sie eine Bewertung aus.');
                return;
            }

            // Bewertung in LocalStorage speichern
            const newReview = {
                id: Date.now(),
                name: document.getElementById('reviewName').value,
                email: document.getElementById('reviewEmail').value,
                rating: selectedRating,
                title: document.getElementById('reviewTitle').value || 'Bewertung',
                text: document.getElementById('reviewText').value,
                service: document.getElementById('reviewService').value || 'Allgemein',
                date: new Date().toLocaleDateString('de-DE'),
                avatar: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`
            };

            // Bestehende Bewertungen laden
            let reviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
            
            // Neue Bewertung hinzufügen
            reviews.unshift(newReview); // Am Anfang einfügen
            
            // In LocalStorage speichern
            localStorage.setItem('userReviews', JSON.stringify(reviews));
            
            // Bewertungen auf der Seite aktualisieren
            updateReviewsDisplay();
            
            alert('Vielen Dank für Ihre Bewertung! Sie wurde erfolgreich gespeichert.');
            closeReviewFormFunc();
        });
    }

    // Bewertungen aus LocalStorage laden und anzeigen
    function loadUserReviews() {
        const reviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
        return reviews;
    }

    // Bewertungen auf der Seite anzeigen
    function updateReviewsDisplay() {
        const userReviews = loadUserReviews();
        const reviewsGrid = document.getElementById('reviewsGrid');
        
        if (!reviewsGrid || userReviews.length === 0) return;

        // Bestehende User-Reviews entfernen (falls vorhanden)
        const existingUserReviews = reviewsGrid.querySelectorAll('.user-review');
        existingUserReviews.forEach(review => review.remove());

        // Neue User-Reviews hinzufügen
        userReviews.forEach(review => {
            const reviewCard = createReviewCard(review);
            reviewsGrid.insertBefore(reviewCard, reviewsGrid.firstChild);
        });
    }

    // Review Card erstellen
    function createReviewCard(review) {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card user-review';
        
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        
        reviewCard.innerHTML = `
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.name}" class="reviewer-avatar">
                <div class="reviewer-info">
                    <h4>${review.name}</h4>
                    <div class="stars">
                        ${review.rating >= 1 ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                        ${review.rating >= 2 ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                        ${review.rating >= 3 ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                        ${review.rating >= 4 ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                        ${review.rating >= 5 ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                    </div>
                    <span class="review-date">vor ${getTimeAgo(review.id)}</span>
                </div>
            </div>
            <p class="review-text">${review.text}</p>
        `;
        
        return reviewCard;
    }

    // Zeit seit Bewertung berechnen
    function getTimeAgo(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 1) return 'wenigen Sekunden';
        if (minutes < 60) return `${minutes} Minuten`;
        if (hours < 24) return `${hours} Stunden`;
        if (days < 7) return `${days} Tagen`;
        return `${Math.floor(days / 7)} Wochen`;
    }

    // Bewertungen beim Laden der Seite anzeigen
    document.addEventListener('DOMContentLoaded', function() {
        updateReviewsDisplay();
    });

    // Review Toggle Funktionalität
    const toggleReviewsBtn = document.getElementById('toggleReviews');
    const reviewsGrid = document.getElementById('reviewsGrid');
    const hiddenReviews = document.querySelectorAll('.review-hidden');
    let reviewsExpanded = false;

    if (toggleReviewsBtn && reviewsGrid) {
        toggleReviewsBtn.addEventListener('click', function() {
            if (!reviewsExpanded) {
                // Bewertungen erweitern mit cooler Animation
                hiddenReviews.forEach((review, index) => {
                    setTimeout(() => {
                        review.classList.remove('review-hidden');
                        review.classList.add('review-visible');
                        
                        // Button-Text erst nach der letzten Animation ändern
                        if (index === hiddenReviews.length - 1) {
                            setTimeout(() => {
                                toggleReviewsBtn.textContent = 'Weniger anzeigen';
                                reviewsExpanded = true;
                            }, 200); // Verzögerung nach der letzten Animation
                        }
                    }, index * 150); // Gestaffelte Animation mit mehr Verzögerung
                });
            } else {
                // Bewertungen minimieren mit cooler Schließ-Animation (rückwärts)
                const totalReviews = hiddenReviews.length;
                hiddenReviews.forEach((review, index) => {
                    // Berechne die umgekehrte Position für rückwärts Animation
                    const reverseIndex = totalReviews - 1 - index;
                    
                    setTimeout(() => {
                        // Erst die Schließ-Animation starten
                        review.classList.add('review-sliding-out');
                        
                        // Nach der Animation die Klassen wechseln
                        setTimeout(() => {
                            review.classList.remove('review-visible', 'review-sliding-out');
                            review.classList.add('review-hidden');
                        }, 600); // Warte bis Animation fertig ist
                        
                        // Button-Text erst nach der ersten Animation ändern (index 0 ist jetzt die letzte)
                        if (index === 0) {
                            setTimeout(() => {
                                toggleReviewsBtn.textContent = 'Mehr anzeigen';
                                reviewsExpanded = false;
                                
                                // Mobile: Automatisch zum Anfang der Bewertungen scrollen
                                if (window.innerWidth <= 768) {
                                    const reviewsSection = document.getElementById('reviews');
                                    if (reviewsSection) {
                                        // Sanftere Scroll-Animation mit Easing
                                        lenis.scrollTo(reviewsSection, { 
                                            offset: -20,
                                            duration: 2.0,
                                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Smooth easing
                                        });
                                    }
                                }
                            }, 600 + 100); // Verzögerung nach der letzten Animation
                        }
                    }, reverseIndex * 80); // Umgekehrte Verzögerung für rückwärts Animation
                });
            }
        });
    }



    // Smooth Scroll für "Mehr anzeigen" Buttons (außer dem Reviews-Button)
    const showMoreButtons = document.querySelectorAll('.btn-secondary');
    showMoreButtons.forEach(button => {
        if (button.textContent.includes('Mehr anzeigen') && button.id !== 'toggleReviews') {
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

    // Route berechnen Funktion mit intelligenter Erkennung
    function calculateRoute() {
        const destination = "Hardenbergstraße 28, 46236 Bottrop";
        
        // Erkennung des Betriebssystems
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isAndroid = /Android/.test(navigator.userAgent);
        
        if (isIOS) {
            // Apple Maps für iOS
            window.open(`http://maps.apple.com/?daddr=${encodeURIComponent(destination)}`, '_blank');
        } else {
            // Google Maps für alle anderen
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`, '_blank');
        }
    }

    // Event Listener für Route berechnen Button
    const routeButton = document.querySelector('.map-info .btn-primary');
    if (routeButton) {
        routeButton.addEventListener('click', function(e) {
            e.preventDefault();
            calculateRoute();
        });
    }
}); 