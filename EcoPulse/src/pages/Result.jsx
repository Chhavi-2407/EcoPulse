import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Result.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const { answers } = useContext(AppContext);
  const data = {
    food: { actual: 40, ideal: 25 },
    housing: { actual: 60, ideal: 25 },
    energy: { actual: 80, ideal: 20 },
    transport: { actual: 70, ideal: 15 },
    goods: { actual: 50, ideal: 10 },
  };
  const location = useLocation();

const lastIndex = location.state?.lastIndex ?? 0;

  // SCORE CALCULATION
  const getScore = () => {
    const values = Object.values(answers);
    if (values.length === 0) return 0;
    return values.reduce((a, b) => a + b, 0) / (values.length * 4);
  };

  const score = getScore();
  const earths = (1 + score * 3).toFixed(1);

  const emoji = earths < 1.5 ? "🌱" : earths < 2.5 ? "🌍" : "🔥";

  // CATEGORY MOCK DATA (can improve later)
  const categories = [
    { name: "Food", value: answers.food || 2 },
    { name: "Housing", value: answers.housing || 2 },
    { name: "Energy", value: answers.electricity || 2 },
    { name: "Transport", value: answers.transport || 2 },
    { name: "Consumption", value: answers.material || 2 },
  ];

  // TOP CONTRIBUTORS
  const top = [...categories].sort((a, b) => b.value - a.value).slice(0, 3);

  return (
    
    <div className="result-page">
        <button
  className="back-btn"
  onClick={() => navigate("/quiz", { state: { index: lastIndex } })}
>
  ← Back
</button>
      <div className="planet planet1"></div>
      <div className="planet planet2"></div>
      <div className="planet planet3"></div>

      {/* HERO */}
      <section className="hero">
        <h2>RESULT</h2>
        <h1>
          {emoji} {earths} Earths
        </h1>
        <p>If everyone lived like you</p>
      </section>

      {/* EARTH VISUAL */}
      <section className="earth-visual">
        <div className="earths">
          {[...Array(Math.round(earths))].map((_, i) => (
            <span key={i}>🌍</span>
          ))}
        </div>
      </section>

      {/* BAR GRAPH */}
      <div className="graph">
        <h2>Breakdown</h2>

        {Object.entries(data).map(([key, value]) => (
          <div className="bar-row" key={key}>
            <span>{key.toUpperCase()}</span>
            <div className="bar">
              <div className="fill" style={{ width: `${value}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* INSIGHTS */}
      <section className="insights">
        <h2>Top Contributors</h2>
        {top.map((t, i) => (
          <p key={i}>🔥 {t.name}</p>
        ))}
      </section>

      {/* COMPARISON */}
      <div className="comparison-section">
        <h2>Category Comparison</h2>

        {Object.entries(data).map(([key, value]) => (
          <div className="compare-row" key={key}>
            <span className="label">{key.toUpperCase()}</span>

            <div className="compare-bars">
              <div className="bar actual">
                <div
                  className="fill actual-fill"
                  style={{ width: `${value.actual}%` }}
                ></div>
              </div>

              <div className="bar ideal">
                <div
                  className="fill ideal-fill"
                  style={{ width: `${value.ideal}%` }}
                ></div>
              </div>
            </div>

            <span className="values">
              {value.actual}% / {value.ideal}%
            </span>
          </div>
        ))}
      </div>

      {/* SOLUTIONS */}
      <section className="solutions">
        <h2>Improve Your Impact</h2>

        <button
          onClick={() =>
            window.open("https://en.wikipedia.org/wiki/Sustainable_energy")
          }
        >
          Reduce Energy Usage
        </button>

        <button
          onClick={() =>
            window.open("https://en.wikipedia.org/wiki/Sustainable_transport")
          }
        >
          Improve Transport
        </button>

        <button
          onClick={() =>
            window.open("https://en.wikipedia.org/wiki/Sustainable_food_system")
          }
        >
          Improve Diet
        </button>
      </section>
    </div>
  );
}