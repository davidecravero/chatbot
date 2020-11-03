import React from "react";
import "./Styles/LearningOption.css";

//topics selection
const LearningOptions = (props) => {
  const optionsMarkup = props.keywords.map((option) => (
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
