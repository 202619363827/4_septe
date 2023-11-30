import React, { useRef } from "react";

const Question = ({ question, options, handleAnswer }) => {
  const selectedOption = useRef(null);

  const handleOptionChange = (event) => {
    selectedOption.current = event.target.value;
  };

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              value={option}
              onChange={handleOptionChange}
              name="option"
            />
            {option}
          </label>
        </div>
      ))}
      <button onClick={() => handleAnswer(selectedOption.current)}>Next</button>
    </div>
  );
};

export default Question;
