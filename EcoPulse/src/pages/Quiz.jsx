import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Section from "../components/Section";
import QuestionSlider from "../components/QuestionSlider";
import QuestionOptions from "../components/QuestionOptions";

import { questions } from "../data/questions";
import { useLocation } from "react-router-dom";
import "../styles/Quiz.css";

export default function Quiz() {
    const location = useLocation();
  const [current, setCurrent] = useState(
  location.state?.index ?? 0
);
  const navigate = useNavigate();

  const question = questions[current];

  const next = () => {
    if (current >= questions.length - 1) {
      navigate("/result", {
  state: { lastIndex: current },
});
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current === 0) {
      navigate("/"); //  navigate to home 
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="quiz-container">
      <Section key={current}>
        <div className="quiz-content">
          {/* QUESTION */}
          {question.type === "slider" && (
            <QuestionSlider title={question.title} labels={question.labels} />
          )}

          {question.type === "options" && (
            <QuestionOptions
              title={question.title}
              options={question.options}
              id={question.id} 
            />
          )}

          {/* BUTTONS */}
          <div className="nav-buttons">
            <button className="prev-btn" onClick={prev}>
              ← Previous
            </button>

            <button className="next-btn" onClick={next}>
              {current === questions.length - 1 ? "See Result 🚀" : "Next →"}
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}