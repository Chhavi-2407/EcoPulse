import { useContext } from "react";

import { AppContext } from "../context/AppContext";

// import "../styles/QuestionSlider.css";

export default function QuestionSlider({
  title,
  subtitle,
  minLabel,
  maxLabel,
  levels = [],
  id,
}) {

  const { answers, setAnswers } =
    useContext(AppContext);

  // =========================
  // STORED VALUE
  // =========================

  const value =
    answers[`${id}_slider`] ?? 50;

  // =========================
  // LEVEL INDEX
  // =========================

  const levelIndex = Math.min(
    levels.length - 1,

    Math.floor(
      (value / 100) * levels.length
    )
  );

  // =========================
  // CURRENT LEVEL
  // =========================

  const currentLevel =
    levels[levelIndex] || {

      label: "",
      desc: "",
      score: 0,
    };

  // =========================
  // HANDLE CHANGE
  // =========================

  const handleChange = (e) => {

    const val =
      Number(e.target.value);

    setAnswers({

      ...answers,

      // UI VALUE
      [`${id}_slider`]: val,

      // ECO SCORE
      [id]:
        currentLevel.score,
    });
  };

  return (

    <div className="slider-question">

      <h1>{title}</h1>

      {subtitle && <p>{subtitle}</p>}

      <div className="slider-wrapper">

        <span>{minLabel}</span>

        <input
          type="range"

          min="0"
          max="100"

          step="1"

          value={value}

          onChange={handleChange}

          className="smooth-slider"
        />

        <span>{maxLabel}</span>

      </div>

      {/* INFO */}

      <div className="slider-info">

        <h2>
          {currentLevel.label}
        </h2>

        <p>
          {currentLevel.description ||
            currentLevel.desc}
        </p>

      </div>

    </div>
  );
}