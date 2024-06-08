import {} from 'react';
import quizCompleteLogo from '../assets/quiz-complete.png'; 
import QUESTIONS from '../questions.js';


export default function Summary({userAnswers}) {
  const skippedAnswers  = userAnswers.filter(ans => ans === null).length;
  const correctAnswers = userAnswers.filter((ans, i) => ans === QUESTIONS[i].answers[0]).length;
  const wrongAnswers = userAnswers.filter((ans, i) => ans !== QUESTIONS[i].answers[0]).length;
  const skippedPercent = Math.round((skippedAnswers / userAnswers.length) * 100);
  const correctPercent = Math.round((correctAnswers / userAnswers.length) * 100);
  const wrongPercent = 100 - skippedPercent - correctPercent;

  return (
    <div id="summary">
      <img src={quizCompleteLogo} alt="quiz complete logo"/>
      <h2>Quiz Completed!</h2>
      <div id='summary-stats'>
        <p>
          <div>
            <span className='number'>{skippedAnswers}</span>
            <span>{skippedPercent}%</span>
          </div>
          <span className='text'>Skipped</span>
        </p>
        <p>
          <div>
            <span className='number'>{correctAnswers}</span>
            <span>{correctPercent}%</span>
          </div>
          <span className='text'>Correct Answers</span>
        </p>
        <p>
          <div>
            <span className='number'>{wrongAnswers}</span>
            <span>{wrongPercent}%</span>
          </div>
          <span className='text'>Wrong Answers</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';
          if(answer === null) {
            cssClass += ' skipped';
          } else if(answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index+1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'SKipped' }</p>
            </li>
          );
        })}
        
      </ol>
    </div>
  )
}
