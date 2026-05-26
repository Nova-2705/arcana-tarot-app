# 🌌 Arcana Tarot App

An immersive, premium, and highly interactive digital tarot reading experience. Styled with a mystic aesthetic, smooth CSS transitions, interactive stars, and custom particle cursor trails, Arcana invites you to discover the whispers of the cosmos.

---

## ✨ Features

- **🔮 Stunning Mystic Design**: Sleek dark-mode theme accented with curated gradient highlights, custom gold-foil frames, runic typography, and a shifting cosmic nebula.
- **🌌 Dynamic Star Background**: A canvas-based interactive background rendering a drifting, glowing field of stars that breathes life into the screen.
- **✨ Cosmic Particle Cursor Trail**: Mouse interactions leave a trail of fading mystic particles that react to your movements.
- **🃏 Interactive Shuffling & Drawing**: Complete tarot card interaction with realistic shuffling animations, fluid card drawing, and beautiful flipping effects.
- **📖 Comprehensive Interpretations**: Integrates a rich database of Major and Minor Arcana cards with descriptive meanings for both upright and reversed positions.
- **📱 Responsive Layout**: Seamless experience tailored for all screen sizes, from high-resolution desktop displays to mobile screens.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) (Ultra-fast development server and building)
- **Styling**: Pure Vanilla CSS (custom-tailored HSL colors, responsive grid/flexbox layouts, custom animations)
- **Effects**: HTML5 Canvas (for high-performance particle animations)
- **Data**: JSON-based Tarot Arcana deck (`tarot.json`)

---

## 📂 Project Structure

```text
TarotReader/
├── public/                 # Static assets (favicons, icons)
├── src/
│   ├── assets/            # Project-wide visual assets
│   ├── components/        # Reusable React components
│   │   ├── Card.jsx       # Card rendering, flipping, and interactions
│   │   ├── Deck.jsx       # Deck layouts and card distribution
│   │   ├── Table.jsx      # Reading table coordinating shuffling/reveal
│   │   ├── ReadingPanel.jsx # Sidebar showing details of the selected card
│   │   ├── StarBackground.jsx # Custom canvas particle star field
│   │   └── CursorTrail.jsx # Custom canvas particle cursor effects
│   ├── data/
│   │   └── tarot.json     # Card meanings, descriptions, and metadata
│   ├── App.jsx            # Main app entry layout and mystic frame structure
│   ├── index.css          # Main design system variables & reset styles
│   └── main.jsx           # React app mount script
├── vite.config.js         # Vite bundler configuration
└── package.json           # Project dependencies & scripts
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine:

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Installation

Clone the repository and install the project dependencies:

```bash
# Clone the repository
git clone https://github.com/Nova-2705/arcana-tarot-app.git

# Navigate into the project folder
cd arcana-tarot-app

# Install dependencies
npm install
```

### 3. Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to the address shown in your terminal (typically `http://localhost:5173`) to experience Arcana.

### 4. Build for Production

Compile and optimize the project for production deployment:

```bash
npm run build
```

The output will be generated in the `dist` directory, ready to be hosted on any static hosting provider.

---

## 🌌 License

This project is licensed under the MIT License - feel free to customize and expand it as you see fit!
