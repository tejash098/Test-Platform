import { useState, useEffect } from "react";
import axios from "axios";
import ClearIcon from '@mui/icons-material/Clear';

const QuizTemplate = ({ dataUrl, title }) => {
  const [quizData, setQuizData] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:4000${dataUrl}`).then((res) => {
      setQuizData(res.data);    
    }).catch((err) => {
      console.log(err);
    });
  }, [dataUrl]);

  if (!quizData.length) {
    return <p className="text-center mt-10">Loading quiz...</p>;
  }

  const question = quizData[current];

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-100">
      <div className="max-w-3xl mx-auto">
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
              onClick={() => setCurrent(0)}
              className="text-slate-400 hover:text-slate-600 hover:cursor-pointer"
            >
              <ClearIcon/>
            </button>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-sky-500 h-2 rounded-full transition-all"
              style={{
                width: `${((current + 1) / quizData.length) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="bg-white rounded-b-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold mb-8">
            {question.question}
          </h2>

          <div className="space-y-3 mb-8">
            {quizData[current].options.map((opt, index) => (
              <button
                key={index}
                className="w-full p-4 border rounded-lg hover:bg-slate-100 text-left"
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrent((prev) => prev + 1)}
            disabled={current === quizData.length - 1}
            className="w-full py-4 rounded-lg font-bold text-white bg-sky-500 disabled:bg-slate-300 disabled:cursor-not-allowed hover:cursor-pointer"
          >
            Next Question
          </button>
        </div>
        <div className="mt-6 text-center text-slate-500">
          Question {current + 1} / {quizData.length}
        </div>

      </div>
    </div>
  );
};

export default QuizTemplate;
