import { useParams } from "react-router-dom";
import QuizTemplate from "./QuizTemplate";
import quizzes from "../jsondata/quizdata.json";

const QuizPage = () => {
  const { quizId } = useParams();

  const quizData = quizzes[quizId];

  if (!quizData) {
    return (
      <h2 className="text-center mt-10 text-xl font-bold">
        Quiz Not Found
      </h2>
    );
  }

  return (
    <QuizTemplate
      quizData={quizData}
      title={quizId.toUpperCase()}
    />
  );
};

export default QuizPage;
