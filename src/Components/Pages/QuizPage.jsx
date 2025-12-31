import { useParams } from "react-router-dom";
import QuizTemplate from "./QuizTemplate";

const quizMap = {
  react: "/react",
  js: "/js",
  python: "/python",
  sql: "/sql",
};

const QuizPage = () => {
  const { quizId } = useParams();
  const dataUrl = quizMap[quizId];

  if (!dataUrl) return <h2>Quiz Not Found</h2>;

  return <QuizTemplate dataUrl={dataUrl} title={quizId.toUpperCase()} />;
};

export default QuizPage;
