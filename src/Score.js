import React from 'react';
const Score = props => {
  return (
    <p className="text">
      Your Score:  { props.numCorrect}/{ props.numQuestions}
		[number of correct answers/number of questions answered]
    </p>
  );
};

export default Score;

