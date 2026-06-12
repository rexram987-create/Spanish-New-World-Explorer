# Spanish New World Explorer

An interactive educational web project about the Spanish voyages to the New World, combining a 3D sailing experience, historical discovery points, modern country information, vexillology, heraldry, etymology, and visual learning cards.

## Project Vision

The goal of this project is to create a free, browser-based historical simulator in which a Spanish sailing ship travels across the Atlantic Ocean and reaches islands, coasts, and territories connected to Spanish exploration and conquest in the New World.

When the ship reaches a destination, an interactive information window opens and presents detailed historical and cultural information about the modern country and the Spanish encounter with that region.

## Core Experience

The user will see a 3D scene with:

- A Spanish sailing ship.
- An ocean route.
- Islands and coastlines connected to the Spanish voyages.
- Discovery points that open historical information cards.
- Visual assets such as flags, coats of arms, maps, portraits, and timeline elements.

## Information Card Structure

Each country or territory should eventually include:

### Basic Country Information

- Modern country name.
- Hebrew country name.
- Capital city.
- Modern flag.
- Modern coat of arms / national emblem.
- Map or location marker.
- Main languages.
- Currency.
- Independence date or foundation date.

### Spanish Discovery / Encounter

- Name of the explorer.
- Explorer life years.
- Year of discovery or first Spanish encounter.
- Circumstances of the discovery.
- Expedition or voyage context.
- Indigenous peoples who lived in the region before Spanish arrival.
- Historical importance of the encounter.

### Etymology

- Origin of the country name.
- Original language of the name.
- Literal meaning, if known.
- Historical explanation of how the name developed.
- Earlier names or colonial names, when relevant.

### Vexillology

- Meaning of the flag colors.
- Meaning of shapes, stars, stripes, crosses, or symbols.
- Year the flag was adopted.
- Previous flags, if relevant.
- Historical or political background of the flag design.

### Heraldry / National Emblem

- Description of the coat of arms or emblem.
- Meaning of animals, plants, weapons, crowns, shields, mountains, seas, suns, or stars.
- Year of adoption.
- Historical symbolism.

### Historical Context

- Indigenous civilizations and communities before Spanish arrival.
- Spanish colonial period.
- Major events connected to conquest, settlement, missions, trade, or resistance.
- Road to independence.
- Short modern historical summary.

## First Suggested Destinations

The first version should begin with a small set of destinations:

1. The Bahamas — linked to Columbus's first voyage in 1492.
2. Cuba — reached by Columbus in 1492.
3. Hispaniola — early Spanish settlement and colonial center.
4. Mexico — linked to Hernán Cortés and the conquest of the Aztec Empire.
5. Peru — linked to Francisco Pizarro and the conquest of the Inca Empire.

## Planned Technology

The project can be built for free using:

- HTML
- CSS
- JavaScript
- Three.js for browser-based 3D graphics
- GitHub for source control
- GitHub Pages for free hosting

## Suggested File Structure

```text
Spanish-New-World-Explorer/
├── index.html
├── style.css
├── script.js
├── data/
│   └── countries.js
├── assets/
│   ├── flags/
│   ├── emblems/
│   ├── leaders/
│   ├── explorers/
│   ├── maps/
│   └── ships/
└── README.md
```

## Development Roadmap

### Phase 1 — Project Foundation

- Create the GitHub repository.
- Add a detailed README.
- Define the first list of countries and destinations.
- Create the basic project file structure.

### Phase 2 — Static Prototype

- Build a simple HTML page.
- Add a country information card.
- Add sample data for three destinations.
- Add placeholder images for flags and emblems.

### Phase 3 — 3D Scene

- Add a Three.js scene.
- Create a basic ocean surface.
- Add a simple ship model or placeholder ship.
- Add island markers.

### Phase 4 — Interaction

- Allow the ship to move between discovery points.
- Open an information window when reaching a destination.
- Add animations and transitions.

### Phase 5 — Research Expansion

- Add detailed etymology.
- Add detailed vexillology.
- Add national emblem explanations.
- Add explorer biographies and life years.
- Add discovery circumstances and historical context.

### Phase 6 — Visual and Educational Upgrade

- Add maps.
- Add timelines.
- Add portraits of explorers and early leaders where licensing allows.
- Add image credits and source references.
- Improve mobile display.

## Licensing and Sources

This project should only use images, maps, and data that are legally usable.

Recommended image sources:

- Wikimedia Commons
- Public domain archives
- Official government pages for modern flags and emblems, where allowed
- Self-created or AI-generated placeholder images, when appropriate

Every image should include:

- File name.
- Source link.
- Creator, if known.
- License.
- Whether attribution is required.

## Important Notes

This project should present history carefully and respectfully. The Spanish voyages to the New World involved exploration, colonization, conquest, forced labor, violence, disease, cultural destruction, resistance, and the creation of new societies. The simulator should not present the events only as adventure, but also include the perspectives of Indigenous peoples and the long-term historical consequences.

## Current Status

Project initialized with a planning README.

Next step: create the first website files and add the first three destinations to the data structure.
