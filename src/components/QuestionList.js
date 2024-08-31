import React from "react";

export default function QuestionList({
  question,
  options,
  onHandle,
  currentAnswer,
}) {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {
          <ul>
            {options.map((option, index) => {
              return (
                <li
                  key={index}
                  onClick={() => onHandle(option)}
                  className={currentAnswer === option ? "selected" : ""}
                >
                  {option}{" "}
                </li>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
}
