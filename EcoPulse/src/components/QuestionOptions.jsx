import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function QuestionOptions({
  title,
  options = [],
  id,
}) {

  const { answers, setAnswers } = useContext(AppContext);

  const selected = answers[id];

  const handleSelect = (index) => {
    setAnswers({
      ...answers,
      [id]: index,
    });
  };

  return (
    <div className="options-question">

      <h1>{title}</h1>

      <div className="options-container">

        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={
              selected === index
                ? "option-btn active"
                : "option-btn"
            }
          >
            {option}
          </button>
        ))}

      </div>

    </div>
  );
}