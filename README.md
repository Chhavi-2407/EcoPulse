# 🌍 EcoPulse — Ecological Footprint Calculator

EcoPulse is a modern, interactive web application that helps users estimate their ecological footprint based on lifestyle choices such as food, housing, energy, and transportation.

It provides a visually engaging experience with dynamic questions, smooth navigation, and a detailed results dashboard — inspired by real-world sustainability tools.

---

## 🚀 Features

* 🌱 **Interactive Quiz System**

  * Slider-based and option-based questions
  * Smooth navigation (Next / Previous)
  * Dynamic rendering from a centralized data file

* 🧠 **Smart Result Calculation**

  * Calculates estimated "Earths needed"
  * Shows environmental impact visually
  * Displays top contributing factors

* 📊 **Detailed Insights**

  * Category-wise breakdown (Food, Housing, Energy, etc.)
  * Comparison with ideal sustainable values
  * Actionable improvement suggestions

* 🎨 **Modern UI/UX**

  * Full-screen immersive design
  * Smooth animations and transitions
  * Space-themed aesthetic with floating elements

* 🔁 **State Management**

  * Global state using React Context API
  * Answers persist across navigation

* 🔗 **Routing**

  * Multi-page navigation using React Router
  * Seamless transition between Quiz and Result pages

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🧭 React Router DOM
* 🎨 CSS (Custom styling + animations)
* 🧠 Context API (State Management)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Section.jsx
│   ├── QuestionSlider.jsx
│   ├── QuestionOptions.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Quiz.jsx
│   ├── Result.css
│   ├── Result.jsx
│
├── context/
│   ├── AppContext.jsx
│
├── data/
│   ├── questions.js
│
├── styles/
│   ├── Home.css
│   ├── Quiz.css
│
├── App.jsx
├── main.jsx
├── App.css
├── index.css
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Chhavi-2407/EcoPulse.git
cd ecopulse
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the project

```bash
npm run dev
```

---

## 🧪 How It Works

1. User starts from the Home page
2. Answers 10 lifestyle-based questions
3. Each answer contributes to a footprint score
4. Final result calculates:

   * 🌍 Earths required
   * 📊 Category breakdown
   * 🔥 Top contributors
5. Suggestions are provided to reduce impact

---

## 📌 Key Concepts Used

* Dynamic rendering from data (`questions.js`)
* Conditional UI rendering (slider vs options)
* State lifting using Context API
* Route-based navigation
* Responsive layout design
* Animated UI transitions

---

## 🎯 Future Improvements

* 🔐 User authentication & saving results
* 📈 Advanced analytics dashboard
* 🌐 Backend integration (Node.js / Firebase)
* 📱 Mobile app version
* 🌍 Real-time carbon data APIs

---

## 🙌 Acknowledgements

Inspired by ecological footprint tools like:

* Global Footprint Network
* Sustainability awareness platforms

---


## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!
