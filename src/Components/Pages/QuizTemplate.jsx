import { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { NavLink } from "react-router-dom";

const QUESTION_TIME = 15;

const QuizTemplate = ({ quizData, title }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);

  useEffect(() => {
    setTime(0);
  }, [current]);

  useEffect(() => {
    if (isFinished) return;

    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [current, isFinished]);

  useEffect(() => {
    if (time === QUESTION_TIME) {
      handleNext();
    }
  }, [time]);

  const question = quizData[current];

  const handleNext = () => {
    if (chosenOption === question.correct) {
      setScore((prev) => prev + 1);
    }

    if (current === quizData.length - 1) {
      setIsFinished(true);
    } else {
      setCurrent((prev) => prev + 1);
      setChosenOption(null);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setScore(0);
    setTime(0);
    setChosenOption(null);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-8 rounded-xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Quiz Completed 🎉
          </h2>
          <p className="text-xl mb-6">
            Your Score: <strong>{score}</strong> / {quizData.length}
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-sky-500 text-white rounded-lg font-bold"
          >
            Restart Quiz
          </button>

          <NavLink
            to="/"
            className="ml-5 px-6 py-3 bg-sky-500 text-white rounded-lg font-bold"
          >
            Home
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="max-w-3xl w-full h-[90vh] flex flex-col">
        <div className="bg-white rounded-t-2xl shadow-2xl p-6 border-b">
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">{title} Quiz</h1>
            <button onClick={handleReset}>
              <ClearIcon />
            </button>
          </div>

          <p className="mb-2">
            Question {current + 1} of {quizData.length}
          </p>

          <p className="font-bold">
            Time Left: {QUESTION_TIME - time}s
          </p>
        </div>

        <div className="bg-white rounded-b-2xl shadow-2xl p-6 flex-1">
          <h2 className="text-xl font-bold mb-6">
            {question.question}
          </h2>

          <div className="space-y-3 mb-6">
            {question.options.map((opt, index) => (
              <button
                key={index}
                onClick={() => setChosenOption(index)}
                className={`w-full p-3 border rounded-lg text-left
                  ${
                    chosenOption === index
                      ? "bg-sky-100 border-sky-500"
                      : "hover:bg-slate-100"
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={chosenOption === null}
            className="w-full py-3 bg-sky-500 text-white rounded-lg font-bold disabled:bg-slate-300"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizTemplate;
