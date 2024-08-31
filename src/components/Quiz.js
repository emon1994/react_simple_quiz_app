import React, { useState } from "react";
import QuestionList from "./QuestionList";
import QuizCSS from "./Quiz.css";

export default function Quiz() {
  const questions = [
    {
      question: "Who is the captain of Bangladesh Cricket Team ?",
      options: [
        "Sakib Al hasan",
        "Mehedi Hasan Miraz",
        "Mahamudullah Riyad",
        "Nazmul Islam Shanto",
      ],
      answer: "Nazmul Islam Shanto",
    },
    {
      question: "Who is the prime advisor of Bangladesh ?",
      options: [
        "Khaleda Zia",
        "Seikh Hasina",
        "Mohammad Younus",
        "Tareq rahman",
      ],
      answer: "Mohammad Younus",
    },
    {
      question: "Whice country is the T-20 world cup champion ?",
      options: ["Bangladesh", "India", "Australia", "pakisthan"],
      answer: "India",
    },
  ];

  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setcurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };
  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div>
          <QuestionList
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onHandle={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? "button-disable" : "button"}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div className="result">your score is {score}</div>
      )}
    </div>
  );
}
