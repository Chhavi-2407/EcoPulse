import { useState } from "react";
import "../styles/DoubleSlider.css";

export default function DoubleSlider({
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
    const { answers, setAnswers } = useContext(AppContext);

const carDistance = answers[`${id}_1`] ?? 0;
const bikeDistance = answers[`${id}_2`] ?? 0;

  const getGradient = (value, max) => {
    const percentage = (value / max) * 100;

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

  // KM → Miles conversion
  const kmToMiles = (km) => {
    return Math.round(km * 0.621371);
  };

  return (
    <div className="double-slider-wrapper">

      {/* FIRST SLIDER */}
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
            max="800"
            value={carDistance}
            onChange={(e) =>
              setAnswers({
  ...answers,
  [`${id}_1`]: Number(e.target.value),
})
            }
            className="eco-slider"
            style={getGradient(carDistance, 800)}
          />

          <span className="slider-label">
            {maxLabel1}
          </span>

        </div>

        {showNumbers && (
          <div className="slider-value">

            {/* DISTANCE */}
            {valueType1 === "distance" && (
              <>
                <h3>{carDistance} kms</h3>
                <p>{kmToMiles(carDistance)} miles</p>
              </>
            )}

            {/* PEOPLE */}
            {valueType1 === "people" && (
              <h3>{carDistance} People</h3>
            )}

            {/* HOME SIZE */}
            {valueType1 === "size" && (
              <h3>{carDistance} m²</h3>
            )}

          </div>
        )}

      </div>

      {/* SECOND SLIDER */}
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
            max="800"
            value={bikeDistance}
            onChange={(e) =>
              setAnswers({
  ...answers,
  [`${id}_2`]: Number(e.target.value),
})
            }
            className="eco-slider"
            style={getGradient(bikeDistance, 800)}
          />

          <span className="slider-label">
            {maxLabel2}
          </span>

        </div>

        {showNumbers && (
          <div className="slider-value">

            {/* DISTANCE */}
            {valueType2 === "distance" && (
              <>
                <h3>{bikeDistance} kms</h3>
                <p>{kmToMiles(bikeDistance)} miles</p>
              </>
            )}

            {/* PEOPLE */}
            {valueType2 === "people" && (
              <h3>{bikeDistance} People</h3>
            )}

            {/* HOME SIZE */}
            {valueType2 === "size" && (
              <h3>{bikeDistance} m²</h3>
            )}

          </div>
        )}

      </div>

    </div>
  );
}