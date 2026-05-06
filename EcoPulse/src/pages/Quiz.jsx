import { useState, useContext } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import Section from "../components/Section";
import QuestionSlider from "../components/QuestionSlider";
import QuestionOptions from "../components/QuestionOptions";
import DoubleSlider from "../components/DoubleSlider";

import { questions } from "../data/questions";

import "../styles/Quiz.css";

export default function Quiz() {
  const { answers } = useContext(AppContext);

  const location = useLocation();

  const navigate = useNavigate();

  const [current, setCurrent] = useState(() => {
    if (location.state?.fromResult) {
      return questions.length - 1;
    }

    return location.state?.index ?? 0;
  });

  const question = questions[current] || questions[0];

  // =========================
  // VALIDATION
  // =========================

  const isAnswered = () => {
    // SLIDER
    if (question.type === "slider") {
      return answers[question.id] !== undefined;
    }

    // OPTIONS
    if (question.type === "options") {
      return answers[question.id] !== undefined;
    }

    // DOUBLE SLIDER
    if (question.type === "double-slider") {
      return (
        answers[`${question.id}_1`] !== undefined &&
        answers[`${question.id}_2`] !== undefined
      );
    }

    return false;
  };

  // =========================
  // NEXT
  // =========================

  const next = () => {
    // LAST QUESTION
    if (current >= questions.length - 1) {
      navigate("/result");

      return;
    }

    // NEXT QUESTION
    setCurrent((prev) => prev + 1);
  };

  // =========================
  // PREVIOUS
  // =========================

  const prev = () => {
    // FIRST QUESTION
    if (current <= 0) {
      navigate("/");

      return;
    }

    // PREVIOUS QUESTION
    setCurrent((prev) => prev - 1);
  };

  return (
    <div className="quiz-container">
      <button className="home-btn" onClick={() => navigate("/")}>
            ⌂ Home
          </button>
      <Section key={current}>
        <div className="quiz-content">
          {/* ========================= */}
          {/* SLIDER QUESTION */}
          {/* ========================= */}

          {question.type === "slider" && (
            <QuestionSlider
              id={question.id}
              title={question.title}
              subtitle={question.subtitle}
              minLabel={question.minLabel}
              maxLabel={question.maxLabel}
              levels={question.levels}
            />
          )}

          {/* ========================= */}
          {/* OPTIONS QUESTION */}
          {/* ========================= */}

          {question.type === "options" && (
            <QuestionOptions
              id={question.id}
              title={question.title}
              options={question.options}
            />
          )}

          {/* ========================= */}
          {/* DOUBLE SLIDER */}
          {/* ========================= */}

          {question.type === "double-slider" && (
            <DoubleSlider
              id={question.id}
              title1={question.title1}
              minLabel1={question.minLabel1}
              maxLabel1={question.maxLabel1}
              title2={question.title2}
              minLabel2={question.minLabel2}
              maxLabel2={question.maxLabel2}
              showNumbers={question.showNumbers}
              valueType1={question.valueType1}
              valueType2={question.valueType2}
            />
          )}

          {/* ========================= */}
          {/* NAV BUTTONS */}
          {/* ========================= */}

          

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