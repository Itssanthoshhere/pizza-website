# 🍕 PizzaVerse — Premium Pizza Restaurant Website

A Premium, High-Fidelity Landing Page to Showcase Delicious Pizzas, Ingredients, and Secure Orders.

---

## 📋 Table of Contents

- [🍕 PizzaVerse — Premium Pizza Restaurant Website](#-pizzaverse--premium-pizza-restaurant-website)
  - [📋 Table of Contents](#-table-of-contents)
  - [📖 About The Project](#-about-the-project)
  - [✨ Features](#-features)
    - [🎨 Modern UI/UX](#-modern-uiux)
    - [📊 Interactive Menus \& Swiper](#-interactive-menus--swiper)
    - [🌿 Fresh Ingredients Showcase](#-fresh-ingredients-showcase)
    - [📈 Scroll Reveal Animations](#-scroll-reveal-animations)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🏗️ Project Structure](#️-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [📦 Live Preview](#-live-preview)
  - [🎯 Key Components](#-key-components)
    - [1. Swiper Integration](#1-swiper-integration)
    - [2. ScrollReveal Animations](#2-scrollreveal-animations)
  - [🤝 Contributing](#-contributing)
  - [📜 License \& Attribution](#-license--attribution)

---

## 📖 About The Project

**PizzaVerse** is a pixel-perfect, feature-rich landing page for a modern pizzeria. It addresses the need for a mouth-watering digital presence by giving users an elegant interface to browse popular pizzas, learn about fresh ingredients, and find contact details easily.

This project serves as a comprehensive study of:

- 🎨 Beautiful, responsive CSS grid and flexbox layouts.
- ⚡ Smooth scrolling and dynamic header shadows on scroll.
- 🗄️ Interactive touch-friendly carousels via **Swiper JS**.
- 🔔 Elegant load-in animations powered by **ScrollReveal**.

---

## ✨ Features

### 🎨 Modern UI/UX

- Fully responsive design that adapts seamlessly to mobile, tablet, and desktop screens.
- Sticky navigation bar with dynamic shadow effects on scroll.
- Active navigation link highlighting based on the current scroll section.

### 📊 Interactive Menus & Swiper

- A **Popular Orders** section utilizing a swipeable carousel for mobile and desktop touch interactions.
- Dynamic overlapping pizza and board visuals in the hero section.

### 🌿 Fresh Ingredients Showcase

- Dedicated grid section detailing the natural ingredients used (Flour, Cheese, Sauces, Vegetables, Meats).

### 📈 Scroll Reveal Animations

- Elements gracefully fade and slide into view as the user scrolls down the page, enhancing the premium feel of the website.

---

## 🛠️ Tech Stack

| Category      | Technology      | Version | Purpose                                              |
| :------------ | :-------------- | :------ | :--------------------------------------------------- |
| **Core**      | HTML5           | -       | Semantic page structure and content                  |
| **Styling**   | CSS3            | -       | Vanilla CSS variables, grids, and responsive layouts |
| **Logic**     | JavaScript      | ES6     | DOM manipulation and event listeners                 |
| **Carousel**  | Swiper JS       | Latest  | Touch-enabled sliders for the Popular section        |
| **Animation** | ScrollReveal JS | Latest  | Scroll-triggered reveal animations                   |
| **Icons**     | Remixicons      | 4.5.0   | Clean, modern iconography                            |

---

## 🏗️ Project Structure

```
pizza-website/
│
├── 📁 assets/                        # High-quality images, SVGs, and favicons
│   ├── home-pizza.png
│   ├── home-board.png
│   └── ...
│
├── 📁 css/                           # Styling layer
│   └── styles.css                    # Main stylesheet with CSS variables
│
├── 📁 js/                            # Interactive logic
│   ├── main.js                       # Core DOM logic (Menu, scroll, active links)
│   └── swiper-bundle.min.js          # Swiper library local fallback
│
└── index.html                        # Main entry point and document structure
```

---

## 🚀 Getting Started

### Prerequisites

Since this is a static website, no complex build tools are required. You simply need a modern web browser.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Itssanthoshhere/PizzaVerse.git
   cd PizzaVerse
   ```

2. **Run Locally**
   You can open the `index.html` file directly in your browser, or use a local development server like VS Code's Live Server for a better experience:
   ```bash
   npx serve .
   ```
   _(Or simply open `index.html` with your favorite browser)._

---

## 📦 Live Preview

- **Live Website**: [Visit PizzaVerse](https://pizza-verse-pi.vercel.app/)
- **GitHub Repository**: [PizzaVerse Repo](https://github.com/Itssanthoshhere/PizzaVerse)

---

## 🎯 Key Components

### 1. Swiper Integration

A versatile touch slider integrated directly into the `Popular` section.

- Utilizes `slidesPerView: "auto"` and `centeredSlides: "auto"` to create a smooth, overlapping card effect that feels native on mobile devices.

### 2. ScrollReveal Animations

Strategic use of the `ScrollReveal` library to orchestrate the entrance of elements.

- The hero section pizzas and ingredients are sequenced with precise `delay` and `interval` properties to create a cohesive loading animation that wows the user immediately upon entry.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add dark mode toggle'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License & Attribution

This project is for educational and portfolio purposes.

⭐ If you liked this premium landing page design, please give it a star!
