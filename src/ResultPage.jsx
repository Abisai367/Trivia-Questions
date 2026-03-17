import React, { useState } from 'react';
import './ResultPage.css';

export default function ResultPage({ data, userChoices, onRestart }) {
  const [viewAnswers, setViewAnswers] = useState(false);

  const totalCorrect = data.reduce((acc, question, i) => {
    if (userChoices[i] === question.correct_answer) acc++;
    return acc;
  }, 0);

  return (
    <div className="result-container">
      <div className="result-card">
        <div className="trophy">
          🏆
        </div>
        <h2>Quiz Completed!</h2>
        <p className="score">
          You scored: <span>{totalCorrect}</span> out of {data.length}
        </p>
        <p className="message">
          Great job! You answered {totalCorrect} out of {data.length} questions correctly.
        </p>
        <div className="buttons">
          <button onClick={onRestart} className="btn primary">Restart Quiz</button>
          <button onClick={() => setViewAnswers(!viewAnswers)} className="btn secondary">
            {viewAnswers ? 'Hide Answers' : 'View Answers'}
          </button>
        </div>

        {viewAnswers && (
          <div className="answer-summary">
            {data.map((question, i) => (
              <div key={i} className="answer-row">
                <p className="question" dangerouslySetInnerHTML={{ __html: `Q${i+1}: ${question.question}` }} />
                <p className={`user-answer ${userChoices[i] === question.correct_answer ? 'correct' : 'wrong'}`}>
                  Your Answer: <span dangerouslySetInnerHTML={{ __html: userChoices[i] || 'Not Answered' }} />
                </p>
                <p className="correct-answer">
                  Correct Answer: <span dangerouslySetInnerHTML={{ __html: question.correct_answer }} />
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}