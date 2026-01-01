import { useState, useEffect } from "react";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";
import {NavLink} from "react-router-dom";

const QUESTION_TIME = 15; 

const QuizTemplate = ({ dataUrl, title }) => {
  const [quizData, setQuizData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000${dataUrl}`)
      .then((res) => setQuizData(res.data))
      .catch(console.error);
  }, [dataUrl]);

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
    if (!quizData.length || isFinished) return;

    if (time === QUESTION_TIME) {
      handleNext();
    }
  }, [time]);

  if (!quizData.length) {
    return <p className="text-center mt-10">Loading quiz...</p>;
  }

  const question = quizData[current];

  const handleNext = () => {
    if (chosenOption === null) {
      if (current === quizData.length - 1) {
        setIsFinished(true);
      } else {
        setCurrent((prev) => prev + 1);
        setChosenOption(null);
      }
      return;
    }

    if (chosenOption === question.correct) {
      setScore((prev) => prev + 1);
      console.log(score);
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
          <h2 className="text-3xl font-bold mb-4">Quiz Completed 🎉</h2>
          <p className="text-xl mb-6">
            Your Score: <strong>{score}</strong> / {quizData.length}
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-sky-500 text-white rounded-lg font-bold"
          >
            Restart Quiz
          </button>
          <NavLink to="/" className="ml-5 px-6 py-3 bg-sky-500 text-white rounded-lg font-bold">Home</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="max-w-3xl w-full h-[90vh] flex flex-col">
        <div className="bg-white rounded-t-2xl shadow-2xl p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sky-500 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                {title[0]}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{title} Quiz</h1>
                <p className="text-sm text-slate-600">
                  Question {current + 1} of {quizData.length}
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-slate-400 hover:text-slate-600"
            >
              <ClearIcon />
            </button>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
            <div
              className="bg-sky-500 h-2 rounded-full transition-all"
              style={{
                width: `${((current + 1) / quizData.length) * 100}%`,
              }}
            />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Time Left</span>
              <span className="font-bold">
                {QUESTION_TIME - time}s
              </span>
            </div>

            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-3 transition-all duration-1000
                  ${
                    time < 8
                      ? "bg-green-500"
                      : time < 12
                      ? "bg-yellow-400"
                      : "bg-red-500"
                  }
                `}
                style={{
                  width: `${((QUESTION_TIME - time) / QUESTION_TIME) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-b-2xl shadow-2xl p-6 flex-1 flex flex-col overflow-hidden">
          <h2 className="text-2xl font-bold mb-8">
            {question.question}
          </h2>

          <div className="space-y-3 flex-1 overflow-y-auto pr-2 mb-6">
            {question.options.map((opt, index) => (
              <button
                key={index}
                onClick={() => setChosenOption(index)}
                className={`w-full p-4 border rounded-lg text-left hover:cursor-pointer
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
            className="w-full py-4 rounded-lg font-bold text-white bg-sky-500 disabled:bg-slate-300 hover:cursor-pointer"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizTemplate;
