# Spice Garden - Restaurant Menu Page

An authentic, responsive single-page restaurant menu website built for **Entri Phase 1 Frontend Foundations (Assignment No. 1)** using HTML5, CSS3, and JavaScript.

## 📌 Project Overview

This project showcases a clean and modern restaurant website for **Spice Garden**, demonstrating:
- Proper HTML5 document structure and semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- CSS box model properties (`padding`, `margin`, `border`, `border-radius`, and `box-shadow`).
- Responsive multi-column layout using CSS Grid and Flexbox.
- Dynamic header height measurement in JavaScript to sync with CSS scroll-padding for accurate anchor navigation.
- Custom SVG icons and dish imagery.

---

## 🚀 Features

- **Header & Navigation**: Brand logo, restaurant tagline, and sticky navigation bar with active section highlighting.
- **Hero Banner**: Eye-catching presentation highlighting fresh ingredients and authentic flavours.
- **Menu Categories**:
  - **Starters**: Veg Spring Rolls, Paneer Tikka, Tomato Soup.
  - **Main Course**: Veg Biryani, Paneer Butter Masala, Butter Naan.
  - **Desserts**: Chocolate Brownie, Gulab Jamun, Vanilla Ice Cream.
- **Item Cards**: Styled menu cards with thumbnail images, descriptions, and formatted Indian Rupee (`₹`) prices.
- **About Us Section**: Background story of the restaurant paired with ambient interior photography.
- **Footer Section**: 3-column contact bar with location address, operating hours, contact phone number, and copyright text.
- **Dynamic Scroll & Header Height**: Measures dynamic header height in JavaScript and applies it via CSS variables (`--header-height`) for smooth anchor scrolling without overlapping.

---

## 📁 Project Structure

```
Restaurant-Menu-Page/
├── index.html               # Main HTML5 semantic structure
├── css/
│   └── style.css            # Stylesheet, Google Fonts, CSS Grid/Flexbox, and box model rules
├── js/
│   └── main.js              # Dynamic header height calculation & scroll event handling
├── assets/                  # SVG icons and high-resolution food/interior images
│   ├── main-logo.svg
│   ├── starters-icon.svg
│   ├── main-course-icon.svg
│   ├── desserts-icon.svg
│   ├── location-icon.svg
│   ├── clock-icon.svg
│   ├── phone-icon.svg
│   ├── hero-dish.jpg
│   ├── veg-spring-rolls.jpg
│   ├── paneer-tikka.jpg
│   ├── tomato-soup.jpg
│   ├── veg-biryani.jpg
│   ├── paneer-butter-masala.jpg
│   ├── butter-naan.jpg
│   ├── chocolate-brownie.jpg
│   ├── gulab-jamun.jpg
│   ├── vanilla-ice-cream.jpg
│   └── restaurant-interior.jpg
├── .gitignore
└── README.md
```

---

## 💻 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/junaidayman/Entri-Assignment1.git
   ```
2. Navigate into the project folder:
   ```bash
   cd Entri-Assignment1
   ```
3. Open `index.html` directly in any web browser, or serve using a local server:
   ```bash
   npx serve .
   ```

---

## 🛠️ Built With

- **HTML5** - Semantic layout and structure
- **CSS3** - Flexbox, CSS Grid, custom properties, and responsive media queries
- **JavaScript (Vanilla)** - Dynamic DOM measurement and scroll navigation
- **Google Fonts** - *Playfair Display* & *Poppins*
