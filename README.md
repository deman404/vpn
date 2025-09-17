# 🌐 North Slayer VPN

[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-7+-pink?logo=framer)](https://www.framer.com/motion/)

A modern, smooth, and interactive VPN application built with **React, TypeScript, TailwindCSS, and Framer Motion**. Features animated connection buttons, real-time VPN status, country selection, and premium plan management.

---

## 🚀 Features

### Main Page

* Real-time VPN status with **color-coded indicators** (green, amber, orange)
* Animated **start/stop button** with pulse, rotation, and gradient animations
* Live **connection timer** (starts on connect, resets on disconnect)
* Dynamic speed indicators
* Smooth transitions between all states

### Premium Page

* Animated feature cards highlighting premium benefits
* Pricing plans with popular plan highlighting
* Smooth page transitions and staggered animations
* Call-to-action for premium trial

### Country Selection

* Searchable list with real-time filtering
* Flag emoji display for countries
* Ping time and signal strength indicators
* Free vs Premium server distinction
* Functional country selection with visual feedback

### Animations & Interactions

* Smooth connection and page transition animations
* Tap, hover, and loading feedback
* Gradient backgrounds and pulse effects for main buttons

### Technical

* React Router for multi-page navigation
* Framer Motion for animations
* Custom VPN hook for state management
* TypeScript interfaces for type safety
* Fully responsive design

---

## 💻 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/north-slayer-vpn.git
cd north-slayer-vpn
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open in browser at:

```
http://localhost:3000
```

---

## ⚡ Usage

* Click the **Start** button on the main page to connect the VPN.
* Monitor **connection status**, speed, and timer in real-time.
* Click the **country selector** to switch to a free server.
* Access **premium features** via the Premium page.
* Enjoy smooth **animations and transitions** throughout the app.

---

## 🛠 Project Structure

```
src/
 ├─ hooks/
 │   └─ useVPN.ts        # VPN state management
 ├─ screens/
 │   ├─ MainDefault/     # Main VPN interface
 │   ├─ CountrySelector/ # Country selection page
 │   └─ Premium/         # Premium subscription page
 ├─ assets/              # Images, gifs, icons
 ├─ components/          # Reusable components
 ├─ App.tsx              # Root component & routes
 └─ tailwind.css         # Tailwind CSS styles
```

---

## 🔧 Customization

* **Add/Remove Countries:** Update the `countries` array in `useVPN.ts`
* **Premium Plans:** Modify the Premium page pricing and features
* **Animations:** Adjust Framer Motion settings in button and page components
* **Start/Stop Button GIF:** Replace the current GIF in `assets/` and update the import path

---

## 📦 Dependencies

* React 18+
* TypeScript
* TailwindCSS
* Framer Motion
* React Router DOM

---

## 🧩 Contribution

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is **MIT licensed**. See `LICENSE` file for details.

---

## 🌟 Acknowledgements

* Animated icons and GIFs inspired by modern VPN apps
* Flag emojis for country selection
* Framer Motion for smooth animations
