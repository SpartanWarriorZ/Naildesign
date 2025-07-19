// Language Switcher
let currentLanguage = 'de';

const translations = {
    de: {
        // Navigation
        'Über uns': 'Über uns',
        'Leistungen': 'Leistungen',
        'Standort': 'Standort',
        'Mehr': 'Mehr',
        'Preise': 'Preise',
        'Bewertungen': 'Bewertungen',
        'FAQ': 'FAQ',
        'Kontakt': 'Kontakt',
        
        // Hero Section
        'NAGELSTUDIO': 'NAGELSTUDIO',
        'Dein Ort für makellose Nägel und entspannende Momente.': 'Dein Ort für makellose Nägel und entspannende Momente.',
        'Termin vereinbaren': 'Termin vereinbaren',
        '5.0 (100+ Bewertungen)': '5.0 (100+ Bewertungen)',
        
        // About Section
        'About Us': 'Über uns',
        'Willkommen bei Aga\'s Naildesign - Ihrem Premium-Nagelstudio für professionelle Nagelpflege und kreative Designs. Wir bieten Ihnen eine entspannte Atmosphäre und erstklassige Dienstleistungen für Ihre Hände und Füße.': 'Willkommen bei Aga\'s Naildesign - Ihrem Premium-Nagelstudio für professionelle Nagelpflege und kreative Designs. Wir bieten Ihnen eine entspannte Atmosphäre und erstklassige Dienstleistungen für Ihre Hände und Füße.',
        'Mehr erfahren': 'Mehr erfahren',
        
        // Info Cards
        'Anfahrt': 'Anfahrt',
        'Einfach zu erreichen': 'Einfach zu erreichen',
        'Öffnungszeiten': 'Öffnungszeiten',
        'Mo-Fr: 9:00-19:00<br>Sa: 9:00-16:00': 'Mo-Fr: 9:00-19:00<br>Sa: 9:00-16:00',
        
        // Services
        'Services': 'Leistungen',
        'Manicure': 'Maniküre',
        'Pedicure': 'Pediküre',
        'Gel Extension': 'Gel-Modellage',
        'Nail Repair': 'Nagelreparatur',
        'Nail Design': 'Nageldesign',
        'Buchen': 'Buchen',
        'View All Reviews': 'Alle Bewertungen anzeigen',
        
        // Reviews
        'Reviews': 'Bewertungen',
        'vor 2 Tagen': 'vor 2 Tagen',
        'vor 1 Woche': 'vor 1 Woche',
        'vor 2 Wochen': 'vor 2 Wochen',
        'vor 2 Monaten': 'vor 2 Monaten',
        'vor 1 Monat': 'vor 1 Monat',
        'vor 6 Wochen': 'vor 6 Wochen',
        'vor 3 Wochen': 'vor 3 Wochen',
        'Mehr anzeigen': 'Mehr anzeigen',
        
        // Team
        'Team': 'Team',
        'Inhaberin, Nageldesignerin': 'Inhaberin, Nageldesignerin',
        'Nageldesignerin': 'Nageldesignerin',
        
        // Rating Summary
        '5 Sterne': '5 Sterne',
        '4 Sterne': '4 Sterne',
        '3 Sterne': '3 Sterne',
        '2 Sterne': '2 Sterne',
        '1 Stern': '1 Stern',
        'Bewertung schreiben': 'Bewertung schreiben',
        'Alle Bewertungen anzeigen': 'Alle Bewertungen anzeigen',
        
        // Map
        'Karte': 'Karte',
        'Adresse': 'Adresse',
        'Musterstraße 123<br>12345 Musterstadt': 'Musterstraße 123<br>12345 Musterstadt',
        'Route berechnen': 'Route berechnen',
        
        // FAQ
        'Häufig gestellte Fragen': 'Häufig gestellte Fragen',
        'Wie vereinbaren Sie einen Termin?': 'Wie vereinbaren Sie einen Termin?',
        'Sie können einen Termin telefonisch unter +49 123 456789 oder über unsere Online-Buchung vereinbaren. Wir sind Montag bis Freitag von 9:00 bis 19:00 Uhr und Samstag von 9:00 bis 16:00 Uhr für Sie da.': 'Sie können einen Termin telefonisch unter +49 123 456789 oder über unsere Online-Buchung vereinbaren. Wir sind Montag bis Freitag von 9:00 bis 19:00 Uhr und Samstag von 9:00 bis 16:00 Uhr für Sie da.',
        'Was sind Acrylnägel?': 'Was sind Acrylnägel?',
        'Acrylnägel sind künstliche Nägel, die aus Acrylpulver und Flüssigkeit hergestellt werden. Sie sind sehr robust und halten länger als Gel-Nägel. Sie eignen sich besonders für Menschen mit brüchigen oder kurzen Nägeln.': 'Acrylnägel sind künstliche Nägel, die aus Acrylpulver und Flüssigkeit hergestellt werden. Sie sind sehr robust und halten länger als Gel-Nägel. Sie eignen sich besonders für Menschen mit brüchigen oder kurzen Nägeln.',
        'Was ist das Ruhe- und Pflegesystem?': 'Was ist das Ruhe- und Pflegesystem?',
        'Das Ruhe- und Pflegesystem ist eine spezielle Behandlung für Ihre natürlichen Nägel. Es stärkt die Nägel und fördert das gesunde Wachstum. Diese Behandlung wird zwischen den Modellagen empfohlen.': 'Das Ruhe- und Pflegesystem ist eine spezielle Behandlung für Ihre natürlichen Nägel. Es stärkt die Nägel und fördert das gesunde Wachstum. Diese Behandlung wird zwischen den Modellagen empfohlen.',
        'Wie lange halten Gel-Nägel?': 'Wie lange halten Gel-Nägel?',
        'Gel-Nägel halten in der Regel 2-3 Wochen, je nach Nagelwachstum und Pflege. Wir empfehlen, alle 2-3 Wochen zur Auffüllung zu kommen, um das beste Ergebnis zu erzielen.': 'Gel-Nägel halten in der Regel 2-3 Wochen, je nach Nagelwachstum und Pflege. Wir empfehlen, alle 2-3 Wochen zur Auffüllung zu kommen, um das beste Ergebnis zu erzielen.',
        
        // Footer
        'Navigation': 'Navigation',
        'Startseite': 'Startseite',
        'Folgen Sie uns': 'Folgen Sie uns',
        
        // Booking
        'Wählen Sie Ihre Leistung': 'Wählen Sie Ihre Leistung',
        'Professionelle Handpflege mit Nagelformung': 'Professionelle Handpflege mit Nagelformung',
        'Entspannende Fußpflege und -massage': 'Entspannende Fußpflege und -massage',
        'Langlebige Gel-Nägel mit Verlängerung': 'Langlebige Gel-Nägel mit Verlängerung',
        'Lackierung mit langanhaltendem Glanz': 'Lackierung mit langanhaltendem Glanz',
        'Professionelle Reparatur beschädigter Nägel': 'Professionelle Reparatur beschädigter Nägel',
        'Kreative Verzierungen und Muster': 'Kreative Verzierungen und Muster',
        'Ihre Kontaktdaten': 'Ihre Kontaktdaten',
        'Name *': 'Name *',
        'E-Mail *': 'E-Mail *',
        'Telefon': 'Telefon',
        'Gewünschtes Datum *': 'Gewünschtes Datum *',
        'Gewünschte Uhrzeit *': 'Gewünschte Uhrzeit *',
        'Bitte wählen': 'Bitte wählen',
        'Anmerkungen': 'Anmerkungen',
        'Besondere Wünsche oder Anmerkungen...': 'Besondere Wünsche oder Anmerkungen...',
        'Ausgewählte Leistung:': 'Ausgewählte Leistung:',
        'Abbrechen': 'Abbrechen',
        'Zurück': 'Zurück',
        'Termin buchen': 'Termin buchen',
        'Termin erfolgreich gebucht!': 'Termin erfolgreich gebucht!',
        'Vielen Dank für Ihre Buchung. Wir haben Ihnen eine Bestätigung per E-Mail gesendet.': 'Vielen Dank für Ihre Buchung. Wir haben Ihnen eine Bestätigung per E-Mail gesendet.',
        'Leistung:': 'Leistung:',
        'Datum:': 'Datum:',
        'Uhrzeit:': 'Uhrzeit:',
        'Schließen': 'Schließen',
        
        // Cookie Banner
        'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.': 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.',
        'Cookie-Einstellungen': 'Cookie-Einstellungen',
        'Alle akzeptieren': 'Alle akzeptieren',
        
        // Review Form
        'Bewertung schreiben': 'Bewertung schreiben',
        'Teilen Sie Ihre Erfahrung mit uns': 'Teilen Sie Ihre Erfahrung mit uns',
        'Ihr Name *': 'Ihr Name *',
        'Ihre Bewertung *': 'Ihre Bewertung *',
        'Klicken Sie auf die Sterne': 'Klicken Sie auf die Sterne',
        'Titel Ihrer Bewertung': 'Titel Ihrer Bewertung',
        'z.B. \'Fantastischer Service!\'': 'z.B. \'Fantastischer Service!\'',
        'Ihre Bewertung *': 'Ihre Bewertung *',
        'Beschreiben Sie Ihre Erfahrung...': 'Beschreiben Sie Ihre Erfahrung...',
        'In Anspruch genommene Leistung': 'In Anspruch genommene Leistung',
        'Bitte wählen': 'Bitte wählen',
        'Bewertung absenden': 'Bewertung absenden'
    },
    en: {
        // Navigation
        'Über uns': 'About',
        'Leistungen': 'Services',
        'Standort': 'Location',
        'Mehr': 'More',
        'Preise': 'Prices',
        'Bewertungen': 'Reviews',
        'FAQ': 'FAQ',
        'Kontakt': 'Contact',
        
        // Hero Section
        'NAGELSTUDIO': 'NAIL STUDIO',
        'Dein Ort für makellose Nägel und entspannende Momente.': 'Your place for flawless nails and relaxing moments.',
        'Termin vereinbaren': 'Book Appointment',
        '5.0 (100+ Bewertungen)': '5.0 (100+ Reviews)',
        
        // About Section
        'About Us': 'About Us',
        'Willkommen bei Aga\'s Naildesign - Ihrem Premium-Nagelstudio für professionelle Nagelpflege und kreative Designs. Wir bieten Ihnen eine entspannte Atmosphäre und erstklassige Dienstleistungen für Ihre Hände und Füße.': 'Welcome to Aga\'s Naildesign - your premium nail studio for professional nail care and creative designs. We offer you a relaxed atmosphere and first-class services for your hands and feet.',
        'Mehr erfahren': 'Learn More',
        
        // Info Cards
        'Anfahrt': 'Directions',
        'Einfach zu erreichen': 'Easy to reach',
        'Öffnungszeiten': 'Opening Hours',
        'Mo-Fr: 9:00-19:00<br>Sa: 9:00-16:00': 'Mon-Fri: 9:00-19:00<br>Sat: 9:00-16:00',
        
        // Services
        'Services': 'Services',
        'Manicure': 'Manicure',
        'Pedicure': 'Pedicure',
        'Gel Extension': 'Gel Extension',
        'Nail Repair': 'Nail Repair',
        'Nail Design': 'Nail Design',
        'Buchen': 'Book',
        'View All Reviews': 'View All Reviews',
        
        // Reviews
        'Reviews': 'Reviews',
        'vor 2 Tagen': '2 days ago',
        'vor 1 Woche': '1 week ago',
        'vor 2 Wochen': '2 weeks ago',
        'vor 2 Monaten': '2 months ago',
        'vor 1 Monat': '1 month ago',
        'vor 6 Wochen': '6 weeks ago',
        'vor 3 Wochen': '3 weeks ago',
        'Mehr anzeigen': 'Show More',
        
        // Team
        'Team': 'Team',
        'Inhaberin, Nageldesignerin': 'Owner, Nail Designer',
        'Nageldesignerin': 'Nail Designer',
        
        // Rating Summary
        '5 Sterne': '5 Stars',
        '4 Sterne': '4 Stars',
        '3 Sterne': '3 Stars',
        '2 Sterne': '2 Stars',
        '1 Stern': '1 Star',
        'Bewertung schreiben': 'Write Review',
        'Alle Bewertungen anzeigen': 'View All Reviews',
        
        // Map
        'Karte': 'Map',
        'Adresse': 'Address',
        'Musterstraße 123<br>12345 Musterstadt': 'Sample Street 123<br>12345 Sample City',
        'Route berechnen': 'Get Directions',
        
        // FAQ
        'Häufig gestellte Fragen': 'Frequently Asked Questions',
        'Wie vereinbaren Sie einen Termin?': 'How do I book an appointment?',
        'Sie können einen Termin telefonisch unter +49 123 456789 oder über unsere Online-Buchung vereinbaren. Wir sind Montag bis Freitag von 9:00 bis 19:00 Uhr und Samstag von 9:00 bis 16:00 Uhr für Sie da.': 'You can book an appointment by phone at +49 123 456789 or through our online booking. We are available Monday to Friday from 9:00 to 19:00 and Saturday from 9:00 to 16:00.',
        'Was sind Acrylnägel?': 'What are acrylic nails?',
        'Acrylnägel sind künstliche Nägel, die aus Acrylpulver und Flüssigkeit hergestellt werden. Sie sind sehr robust und halten länger als Gel-Nägel. Sie eignen sich besonders für Menschen mit brüchigen oder kurzen Nägeln.': 'Acrylic nails are artificial nails made from acrylic powder and liquid. They are very durable and last longer than gel nails. They are particularly suitable for people with brittle or short nails.',
        'Was ist das Ruhe- und Pflegesystem?': 'What is the rest and care system?',
        'Das Ruhe- und Pflegesystem ist eine spezielle Behandlung für Ihre natürlichen Nägel. Es stärkt die Nägel und fördert das gesunde Wachstum. Diese Behandlung wird zwischen den Modellagen empfohlen.': 'The rest and care system is a special treatment for your natural nails. It strengthens the nails and promotes healthy growth. This treatment is recommended between extensions.',
        'Wie lange halten Gel-Nägel?': 'How long do gel nails last?',
        'Gel-Nägel halten in der Regel 2-3 Wochen, je nach Nagelwachstum und Pflege. Wir empfehlen, alle 2-3 Wochen zur Auffüllung zu kommen, um das beste Ergebnis zu erzielen.': 'Gel nails typically last 2-3 weeks, depending on nail growth and care. We recommend coming for a fill every 2-3 weeks to achieve the best result.',
        
        // Footer
        'Navigation': 'Navigation',
        'Startseite': 'Home',
        'Folgen Sie uns': 'Follow Us',
        
        // Booking
        'Wählen Sie Ihre Leistung': 'Choose Your Service',
        'Professionelle Handpflege mit Nagelformung': 'Professional hand care with nail shaping',
        'Entspannende Fußpflege und -massage': 'Relaxing foot care and massage',
        'Langlebige Gel-Nägel mit Verlängerung': 'Long-lasting gel nails with extension',
        'Lackierung mit langanhaltendem Glanz': 'Polish with long-lasting shine',
        'Professionelle Reparatur beschädigter Nägel': 'Professional repair of damaged nails',
        'Kreative Verzierungen und Muster': 'Creative decorations and patterns',
        'Ihre Kontaktdaten': 'Your Contact Information',
        'Name *': 'Name *',
        'E-Mail *': 'Email *',
        'Telefon': 'Phone',
        'Gewünschtes Datum *': 'Preferred Date *',
        'Gewünschte Uhrzeit *': 'Preferred Time *',
        'Bitte wählen': 'Please select',
        'Anmerkungen': 'Notes',
        'Besondere Wünsche oder Anmerkungen...': 'Special requests or notes...',
        'Ausgewählte Leistung:': 'Selected Service:',
        'Abbrechen': 'Cancel',
        'Zurück': 'Back',
        'Termin buchen': 'Book Appointment',
        'Termin erfolgreich gebucht!': 'Appointment successfully booked!',
        'Vielen Dank für Ihre Buchung. Wir haben Ihnen eine Bestätigung per E-Mail gesendet.': 'Thank you for your booking. We have sent you a confirmation by email.',
        'Leistung:': 'Service:',
        'Datum:': 'Date:',
        'Uhrzeit:': 'Time:',
        'Schließen': 'Close',
        
        // Cookie Banner
        'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.': 'We use cookies to improve your experience on our website.',
        'Cookie-Einstellungen': 'Cookie Settings',
        'Alle akzeptieren': 'Accept All',
        
        // Review Form
        'Bewertung schreiben': 'Write Review',
        'Teilen Sie Ihre Erfahrung mit uns': 'Share your experience with us',
        'Ihr Name *': 'Your Name *',
        'Ihre Bewertung *': 'Your Rating *',
        'Klicken Sie auf die Sterne': 'Click on the stars',
        'Titel Ihrer Bewertung': 'Title of your review',
        'z.B. \'Fantastischer Service!\'': 'e.g. \'Fantastic Service!\'',
        'Ihre Bewertung *': 'Your Review *',
        'Beschreiben Sie Ihre Erfahrung...': 'Describe your experience...',
        'In Anspruch genommene Leistung': 'Service Used',
        'Bitte wählen': 'Please select',
        'Bewertung absenden': 'Submit Review'
    }
};

function switchLanguage() {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
    
    // Update language selector
    const languageSelector = document.getElementById('languageSelector');
    const currentLanguageSpan = document.getElementById('currentLanguage');
    const flagIcon = languageSelector.querySelector('.flag-icon');
    
    if (currentLanguage === 'en') {
        flagIcon.src = 'https://flagcdn.com/gb.svg';
        flagIcon.alt = 'English';
        currentLanguageSpan.textContent = 'EN';
    } else {
        flagIcon.src = 'https://flagcdn.com/de.svg';
        flagIcon.alt = 'Deutsch';
        currentLanguageSpan.textContent = 'DE';
    }
    
    // Update all translatable elements
    updatePageLanguage();
}

function updatePageLanguage() {
    const translatableElements = document.querySelectorAll('[data-de][data-en]');
    
    translatableElements.forEach(element => {
        const germanText = element.getAttribute('data-de');
        const englishText = element.getAttribute('data-en');
        
        if (currentLanguage === 'en') {
            // Check if the element contains HTML tags
            if (germanText.includes('<br>') || englishText.includes('<br>')) {
                element.innerHTML = englishText;
            } else {
                element.textContent = englishText;
            }
        } else {
            // Check if the element contains HTML tags
            if (germanText.includes('<br>') || englishText.includes('<br>')) {
                element.innerHTML = germanText;
            } else {
                element.textContent = germanText;
            }
        }
    });
    
    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-de-placeholder][data-en-placeholder]');
    placeholderElements.forEach(element => {
        const germanPlaceholder = element.getAttribute('data-de-placeholder');
        const englishPlaceholder = element.getAttribute('data-en-placeholder');
        
        if (currentLanguage === 'en') {
            element.placeholder = englishPlaceholder;
        } else {
            element.placeholder = germanPlaceholder;
        }
    });
    
    // Handle option translations
    const optionElements = document.querySelectorAll('option[data-de][data-en]');
    optionElements.forEach(element => {
        const germanText = element.getAttribute('data-de');
        const englishText = element.getAttribute('data-en');
        
        if (currentLanguage === 'en') {
            element.textContent = englishText;
        } else {
            element.textContent = germanText;
        }
    });
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('click', switchLanguage);
        languageSelector.style.cursor = 'pointer';
    }
});

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


    
    // Generate Calendly URL with language support
function generateCalendlyUrl(serviceName) {
    // Versuche verschiedene Calendly URL-Strukturen für die Sprachauswahl
    let baseUrl;
    
    if (currentLanguage === 'en') {
        // Englische URL-Varianten
        baseUrl = "https://calendly.com/leonidas-pyka/30min";
    } else {
        // Deutsche URL-Variante
        baseUrl = "https://calendly.com/leonidas-pyka/30min";
    }
    
    const params = new URLSearchParams({
        background_color: "000000",
        text_color: "FFFFFF",
        primary_color: "FFD700",
        hide_landing_page_details: "1",
        hide_event_type_details: "1",
        a1: serviceName
    });
    
    // Verschiedene Sprachparameter für Calendly
    if (currentLanguage === 'en') {
        // Englische Parameter
        params.append('locale', 'en');
        params.append('lang', 'en');
        params.append('language', 'en');
        params.append('hl', 'en');
        params.append('ui_locale', 'en');
        params.append('locale_code', 'en');
    } else {
        // Deutsche Parameter
        params.append('locale', 'de');
        params.append('lang', 'de');
        params.append('language', 'de');
        params.append('hl', 'de');
        params.append('ui_locale', 'de');
        params.append('locale_code', 'de');
    }
    
    console.log('Generating Calendly URL with language:', currentLanguage);
    console.log('Base URL:', baseUrl);
    console.log('URL parameters:', params.toString());
    
    return `${baseUrl}?${params.toString()}`;
}

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
                
                // Calendly-URL mit Sprachunterstützung generieren
                const fullUrl = generateCalendlyUrl(serviceToBook.name);
                console.log('Calendly URL:', fullUrl);
                
                // Calendly-Elemente direkt verwenden
                calendlyIframe.src = fullUrl;
                
                // Setze Iframe-Attribute für bessere Sprachunterstützung
                if (currentLanguage === 'en') {
                    calendlyIframe.setAttribute('lang', 'en');
                    calendlyIframe.setAttribute('data-lang', 'en');
                } else {
                    calendlyIframe.setAttribute('lang', 'de');
                    calendlyIframe.setAttribute('data-lang', 'de');
                }
                
                // Zusätzliche Sprachaktualisierung nach dem Laden
                calendlyIframe.onload = function() {
                    console.log('Calendly iframe loaded with language:', currentLanguage);
                    // Versuche die Sprache nochmal zu setzen
                    if (currentLanguage === 'en') {
                        try {
                            calendlyIframe.contentWindow.postMessage({
                                type: 'setLanguage',
                                language: 'en'
                            }, '*');
                        } catch (e) {
                            console.log('Could not set language via postMessage:', e);
                        }
                    }
                };
                
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
                    
                    // Calendly-URL mit Sprachunterstützung generieren
                    const fullUrl = generateCalendlyUrl(serviceName);
                    
                    // Calendly-Elemente direkt verwenden
                    const calendlyIframe = document.getElementById('calendlyIframe');
                    const calendlyPopup = document.getElementById('calendlyPopup');
                    
                    if (calendlyIframe && calendlyPopup) {
                        calendlyIframe.src = fullUrl;
                        
                        // Setze Iframe-Attribute für bessere Sprachunterstützung
                        if (currentLanguage === 'en') {
                            calendlyIframe.setAttribute('lang', 'en');
                            calendlyIframe.setAttribute('data-lang', 'en');
                        } else {
                            calendlyIframe.setAttribute('lang', 'de');
                            calendlyIframe.setAttribute('data-lang', 'de');
                        }
                        
                        // Zusätzliche Sprachaktualisierung nach dem Laden
                        calendlyIframe.onload = function() {
                            console.log('Calendly iframe loaded with language:', currentLanguage);
                            // Versuche die Sprache nochmal zu setzen
                            if (currentLanguage === 'en') {
                                try {
                                    calendlyIframe.contentWindow.postMessage({
                                        type: 'setLanguage',
                                        language: 'en'
                                    }, '*');
                                } catch (e) {
                                    console.log('Could not set language via postMessage:', e);
                                }
                            }
                        };
                        
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