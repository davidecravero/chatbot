import React from "react";
import "./Styles/LearningOption.css";

//topics selection
const LearningOptions = (props) => {
  const options = [
    { text: "topic1", handler: () => {}, id: 1 },
    { text: "topic2", handler: () => {}, id: 2 },
    { text: "topic3", handler: () => {}, id: 3 },
    { text: "topic4", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
