import React, { useState } from "react";
import Question from "./components/Question";

const questionsData = [  {    question: "What is the capital of France?",    options: ["Paris", "London", "Madrid", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Brain", "Skin", "Liver"],
    answer: "Skin",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Denali"],
    answer: "Mount Everest",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    answer: "Vatican City",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: "Au",
  },
  {
    question: "What is the most populous country in the world?",
    options: ["China", "India", "United States", "Brazil"],
    answer: "China",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Jane Austen", "F. Scott Fitzgerald", "Ernest Hemingway"],
    answer: "Harper Lee",
  },
];

const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
  
    const handleAnswer = (selectedOption) => {
      const isCorrect = selectedOption === questionsData[currentQuestion].answer;
      const newScore = isCorrect ? score + 2 : score;
  
      setScore(newScore);
  
      const nextQuestion = currentQuestion + 1;
  
      if (nextQuestion < questionsData.length

  ) {
        setCurrentQuestion(nextQuestion);
  } else {
        setShowResult(true);
  }
  };
  
        const restartTest = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
  };
  
  return (
  <div className="test-container">
  {!showResult ? (
  <Question
         questionData={questionsData[currentQuestion]}
         handleAnswer={handleAnswer}
         currentQuestion={currentQuestion}
         totalQuestions={questionsData.length}
       />
  ) : (
  <div className="result-container">
  <h2>You scored ${score} out of ${questionsData.length * 2}!</h2>
  {score >= 12 ? (
  <h3>Congratulations, you passed the test!</h3>
  ) : (
  <div>
  <h3>Sorry, you did not pass the test.</h3>
  <button onClick={restartTest}>Restart Test</button>
  </div>
  )}
  </div>
  )}
  </div>
  );
  };
  
  export default Test;
  
  
  
  
  