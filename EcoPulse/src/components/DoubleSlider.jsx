import { useContext } from "react";

import { AppContext } from "../context/AppContext";

import "../styles/DoubleSlider.css";

export default function DoubleSlider({
  id,

  title1,
  minLabel1,
  maxLabel1,

  title2,
  minLabel2,
  maxLabel2,

  showNumbers,

  valueType1,
  valueType2,
}) {

  const { answers, setAnswers } =
    useContext(AppContext);

  // =========================
  // DYNAMIC VALUES
  // =========================

  const value1 =
    answers[`${id}_1`] ?? 0;

  const value2 =
    answers[`${id}_2`] ?? 0;

  // =========================
  // DYNAMIC MAX VALUES
  // =========================

  const getMax = (type) => {

    if (type === "distance")
      return 800;

    if (type === "people")
      return 10;

    if (type === "size")
      return 500;

    return 100;
  };

  const max1 =
    getMax(valueType1);

  const max2 =
    getMax(valueType2);

  // =========================
  // GRADIENT
  // =========================

  const getGradient = (value, max) => {

    const percentage =
      (value / max) * 100;

    return {
      background: `linear-gradient(
        to right,
        #f5a35c 0%,
        #f5a35c ${percentage}%,
        #737b8c ${percentage}%,
        #737b8c 100%
      )`,
    };
  };

  // =========================
  // KM → MILES
  // =========================

  const kmToMiles = (km) => {
    return Math.round(km * 0.621371);
  };

  return (

    <div className="double-slider-wrapper">

      {/* ========================= */}
      {/* FIRST SLIDER */}
      {/* ========================= */}

      <div className="double-slider-block">

        <h1 className="double-title">
          {title1}
        </h1>

        <div className="double-slider-row">

          <span className="slider-label">
            {minLabel1}
          </span>

          <input
            type="range"

            min="0"
            max={max1}

            value={value1}

            onChange={(e) =>
              setAnswers({
                ...answers,

                [`${id}_1`]:
                  Number(e.target.value),
              })
            }

            className="eco-slider"

            style={getGradient(
              value1,
              max1
            )}
          />

          <span className="slider-label">
            {maxLabel1}
          </span>

        </div>

        {/* VALUE DISPLAY */}

        {showNumbers && (

          <div className="slider-value">

            {/* DISTANCE */}

            {valueType1 === "distance" && (
              <>
                <h3>{value1} kms</h3>

                <p>
                  {kmToMiles(value1)} miles
                </p>
              </>
            )}

            {/* PEOPLE */}

            {valueType1 === "people" && (
              <h3>{value1} People</h3>
            )}

            {/* SIZE */}

            {valueType1 === "size" && (
              <h3>{value1} m²</h3>
            )}

          </div>

        )}

      </div>

      {/* ========================= */}
      {/* SECOND SLIDER */}
      {/* ========================= */}

      <div className="double-slider-block second-block">

        <h1 className="double-title">
          {title2}
        </h1>

        <div className="double-slider-row">

          <span className="slider-label">
            {minLabel2}
          </span>

          <input
            type="range"

            min="0"
            max={max2}

            value={value2}

            onChange={(e) =>
              setAnswers({
                ...answers,

                [`${id}_2`]:
                  Number(e.target.value),
              })
            }

            className="eco-slider"

            style={getGradient(
              value2,
              max2
            )}
          />

          <span className="slider-label">
            {maxLabel2}
          </span>

        </div>

        {/* VALUE DISPLAY */}

        {showNumbers && (

          <div className="slider-value">

            {/* DISTANCE */}

            {valueType2 === "distance" && (
              <>
                <h3>{value2} kms</h3>

                <p>
                  {kmToMiles(value2)} miles
                </p>
              </>
            )}

            {/* PEOPLE */}

            {valueType2 === "people" && (
              <h3>{value2} People</h3>
            )}

            {/* SIZE */}

            {valueType2 === "size" && (
              <h3>{value2} m²</h3>
            )}

          </div>

        )}

      </div>

    </div>
  );
}