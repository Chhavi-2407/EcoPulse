import { useContext } from "react";

import { AppContext } from "../context/AppContext";

import "../styles/QuestionOptions.css";

export default function QuestionOptions({
  title,
  options = [],
  id,
}) {

  const { answers, setAnswers } =
    useContext(AppContext);

  const selectedOption =
    answers[id];

  return (

    <div className="options-question">

      <h1 className="options-title">
        {title}
      </h1>

      <div className="options-container">

        {options.map((option, index) => (

          <button
            key={index}

            className={`option-btn ${
              selectedOption === option.score
                ? "selected"
                : ""
            }`}

            onClick={() =>
              setAnswers({
                ...answers,

                [id]: option.score,
              })
            }
          >

            {option.label}

          </button>

        ))}

      </div>

    </div>
  );
}