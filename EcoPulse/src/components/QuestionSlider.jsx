import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function QuestionSlider({
  title,
  subtitle,
  minLabel,
  maxLabel,
  levels = [],
  id,
}) {

  const { answers, setAnswers } = useContext(AppContext);

  // get stored value
  const value = answers[id] ?? 50;

  const handleChange = (e) => {
    const val = Number(e.target.value);

    setAnswers({
      ...answers,
      [id]: val,
    });
  };

  // smooth mapping
  const levelIndex = Math.min(
    levels.length - 1,
    Math.floor((value / 100) * levels.length)
  );

  const currentLevel = levels[levelIndex] || {
    label: "",
    desc: "",
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

      <div className="slider-info">
        <h2>{currentLevel.label}</h2>
        <p>{currentLevel.description || currentLevel.desc}</p>
      </div>

    </div>
  );
}