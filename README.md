# Aga's Naildesign - Webseite

Eine moderne, responsive Webseite für ein Nagelstudio im eleganten Design mit dunklem Farbschema und rosa Akzenten.

## 🎨 Design Features

- **Modernes Design**: Dunkles Farbschema mit rosa Akzenten (#ff69b4)
- **Responsive Layout**: Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **Smooth Animations**: Sanfte Übergänge und Hover-Effekte
- **Interaktive Elemente**: FAQ-Akkordeon, Bildergalerie, Smooth Scrolling

## 📱 Responsive Design

Die Webseite ist vollständig responsive und passt sich automatisch an verschiedene Bildschirmgrößen an:

- **Desktop**: Vollständige Navigation mit allen Elementen
- **Tablet**: Angepasste Layouts für mittlere Bildschirme
- **Mobile**: Hamburger-Menü und optimierte Touch-Interaktionen

## 🚀 Funktionen

### Navigation
- Fixierte Navigation mit Smooth Scrolling
- Responsive Hamburger-Menü für Mobile
- Automatisches Ein-/Ausblenden beim Scrollen

### Hero Section
- Vollbild-Hintergrund mit Parallax-Effekt
- Call-to-Action Buttons
- Bewertungsanzeige

### Über uns
- Bildergalerie mit Navigation
- Informationskarten (Anfahrt, Öffnungszeiten, Kontakt)
- Responsive Grid-Layout

### Leistungen
- Service-Übersicht mit Preisen
- Buchungs-Buttons für jeden Service
- Bewertungszusammenfassung

### Bewertungen
- Kundenbewertungen mit Profilbildern
- Sternbewertungen
- "Mehr anzeigen" Funktionalität

### Team
- Team-Mitglieder mit Profilbildern
- Hover-Effekte

### Bewertungszusammenfassung
- Detaillierte Bewertungsstatistiken
- Balkendiagramm für Bewertungsverteilung

### Karte
- Platzhalter für Google Maps Integration
- Adressinformationen
- Route-Berechnung Button

### FAQ
- Akkordeon-Style Fragen und Antworten
- Smooth Öffnen/Schließen Animationen

### Footer
- Kontaktinformationen
- Social Media Links
- Rechtliche Links
- Cookie-Banner

## 🛠️ Technologien

- **HTML5**: Semantische Struktur
- **CSS3**: Moderne Styling-Techniken
  - CSS Grid und Flexbox
  - CSS Custom Properties
  - Backdrop Filter
  - Smooth Transitions
- **JavaScript (ES6+)**: Interaktive Funktionen
  - Intersection Observer API
  - Event Handling
  - DOM Manipulation

## 📁 Dateistruktur

```
Aga's Naildesign/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # CSS-Stylesheet
├── script.js           # JavaScript-Funktionalität
└── README.md           # Diese Datei
```

## 🎯 Verwendung

1. **Lokale Entwicklung**:
   ```bash
   # Öffnen Sie die index.html in einem Browser
   # Oder starten Sie einen lokalen Server:
   python -m http.server 8000
   # Dann öffnen Sie http://localhost:8000
   ```

2. **Produktion**:
   - Laden Sie alle Dateien auf Ihren Webhost hoch
   - Stellen Sie sicher, dass alle Pfade korrekt sind
   - Testen Sie die Funktionalität auf verschiedenen Geräten

## 🔧 Anpassungen

### Farben ändern
Die Hauptfarben können in der `styles.css` angepasst werden:

```css
:root {
  --primary-color: #ff69b4;    /* Rosa Akzentfarbe */
  --secondary-color: #ff1493;  /* Dunkleres Rosa */
  --background-dark: #1a1a1a;  /* Dunkler Hintergrund */
  --text-light: #ffffff;       /* Weißer Text */
}
```

### Inhalte anpassen
- **Texte**: Bearbeiten Sie die Inhalte in der `index.html`
- **Bilder**: Ersetzen Sie die Unsplash-URLs durch Ihre eigenen Bilder
- **Kontaktdaten**: Aktualisieren Sie Telefonnummer, E-Mail und Adresse

### Google Maps Integration
Ersetzen Sie den Map-Platzhalter in der `index.html`:

```html
<!-- Ersetzen Sie den map-placeholder div mit: -->
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

## 📞 Kontakt

Für Fragen oder Anpassungen kontaktieren Sie uns gerne!

## 📄 Lizenz

Diese Webseite wurde für Aga's Naildesign erstellt. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ für moderne Webstandards und beste Benutzererfahrung** 