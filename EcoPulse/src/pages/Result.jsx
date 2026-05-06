import { useContext } from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import { AppContext } from "../context/AppContext";

import "./Result.css";

export default function Result() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const lastIndex =
    location.state?.lastIndex ?? 0;

  const { answers } =
    useContext(AppContext);

  // =========================
  // CATEGORY CALCULATIONS
  // =========================

  // FOOD
  const food =
    ((answers.food || 0) +
      (answers.localFood || 0)) / 2;

  // HOUSING
  const housing =
    (answers.housing || 0) +

    ((answers.household_2 || 0) / 500) * 25;

  // ENERGY
  const energy =
    ((answers.electricity || 0) +
      (answers.renewable || 0)) / 2;

  // TRANSPORT
  const transport =
    (answers.transport || 0) +

    ((answers.distance_1 || 0) / 800) * 25 +

    ((answers.distance_2 || 0) / 800) * 15 +

    (answers.flights || 0);

  // WASTE
  const waste =
    answers.waste || 0;

  // =========================
  // TOTAL SCORE
  // =========================

  const totalScore =

    food +
    housing +
    energy +
    transport +
    waste;

  // =========================
  // EARTH CALCULATION
  // =========================

  const earths =
    Math.max(
      1,
      (totalScore / 45).toFixed(1)
    );

  // =========================
  // EMOJI
  // =========================

  const emoji =

    earths <= 1.5
      ? "🌱"

      : earths <= 3
      ? "🌍"

      : "🔥";

  // =========================
  // BREAKDOWN DATA
  // =========================

  const categories = [

    {
      name: "Food",
      value: food,
      ideal: 20,
    },

    {
      name: "Housing",
      value: housing,
      ideal: 25,
    },

    {
      name: "Energy",
      value: energy,
      ideal: 20,
    },

    {
      name: "Transport",
      value: transport,
      ideal: 15,
    },

    {
      name: "Waste",
      value: waste,
      ideal: 10,
    },
  ];

  // =========================
  // TOP CONTRIBUTORS
  // =========================

  const top =
    [...categories]

      .sort((a, b) =>
        b.value - a.value
      )

      .slice(0, 3);

  return (

    <div className="result-page">

      {/* BACK BUTTON */}

      <button
  className="back-btn"
  onClick={() =>
    navigate("/quiz", {
      state: {
        index: lastIndex,
        fromResult: true,
      },
    })
  }
>
  ← Back
</button>

      {/* BACKGROUND PLANETS */}

      <div className="planet planet1"></div>
      <div className="planet planet2"></div>
      <div className="planet planet3"></div>

      {/* HERO */}

      <section className="hero">

        <h2>RESULT</h2>

        <h1>
          {emoji} {earths} Earths
        </h1>

        <p>
          If everyone lived like you
        </p>

      </section>

      {/* EARTH VISUAL */}

      <section className="earth-visual">

        <div className="earths">

          {[...Array(Math.round(earths))]

            .map((_, i) => (

              <span key={i}>
                🌍
              </span>

            ))}

        </div>

      </section>

      {/* BREAKDOWN */}

      <div className="graph">

        <h2>Breakdown</h2>

        {categories.map((item, index) => (

          <div
            className="bar-row"
            key={index}
          >

            <span>
              {item.name.toUpperCase()}
            </span>

            <div className="bar">

              <div
                className="fill"

                style={{
                  width: `${Math.min(
                    item.value,
                    100
                  )}%`,
                }}
              ></div>

            </div>

          </div>

        ))}

      </div>

      {/* INSIGHTS */}

      <section className="insights">

        <h2>
          Top Contributors
        </h2>

        {top.map((t, i) => (

          <p key={i}>
            🔥 {t.name}
          </p>

        ))}

      </section>

      {/* COMPARISON */}

      <div className="comparison-section">

        <h2>
          Category Comparison
        </h2>

        {categories.map((item, index) => (

          <div
            className="compare-row"
            key={index}
          >

            <span className="label">
              {item.name.toUpperCase()}
            </span>

            <div className="compare-bars">

              {/* ACTUAL */}

              <div className="bar actual">

                <div
                  className="fill actual-fill"

                  style={{
                    width: `${Math.min(
                      item.value,
                      100
                    )}%`,
                  }}
                ></div>

              </div>

              {/* IDEAL */}

              <div className="bar ideal">

                <div
                  className="fill ideal-fill"

                  style={{
                    width: `${item.ideal}%`,
                  }}
                ></div>

              </div>

            </div>

            <span className="values">

              {item.value.toFixed(1)} /
              {" "}
              {item.ideal}

            </span>

          </div>

        ))}

      </div>

      {/* SOLUTIONS */}

     <section className="solutions">

  <h2>Improve Your Impact</h2>

  <button
    onClick={() =>
      window.location.href =
        "https://en.wikipedia.org/wiki/Sustainable_energy"
    }
  >
    Reduce Energy Usage
  </button>

  <button
    onClick={() =>
      window.location.href =
        "https://en.wikipedia.org/wiki/Sustainable_transport"
    }
  >
    Improve Transport
  </button>

  <button
    onClick={() =>
      window.location.href =
        "https://en.wikipedia.org/wiki/Sustainable_food_system"
    }
  >
    Improve Diet
  </button>

</section>

    </div>
  );
}