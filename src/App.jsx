import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import QuizPage from "./Components/Pages/QuizPage";

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
