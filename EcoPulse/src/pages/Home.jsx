import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz"); //navigate to quiz page
  };

  return (
    <div className="home">
      
      {/* BACKGROUND PLANETS */}
      <div className="planet planet1"></div>
      <div className="planet planet2"></div>

      {/* HERO SECTION */}
      <section className="hero-section">
        <h1 className="logo">🌍 EcoPulse</h1>
        <p className="tagline">
          Measure your impact. Change your future.
        </p>

        <button onClick={handleStart} className="start-btn">
          Get Started ↓
        </button>
      </section>

    </div>
  );
}