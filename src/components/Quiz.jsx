import { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswerSelect = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correct;
    if (isCorrect) setScore(score + 1);
    
    setAnswers([...answers, { question: currentQuestion, correct: isCorrect }]);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90) return { message: 'Outstanding! 🌟', emoji: '🏆', color: '#ffd700' };
    if (percentage >= 70) return { message: 'Great job! 🎉', emoji: '🥈', color: '#c0c0c0' };
    if (percentage >= 50) return { message: 'Good effort! 💪', emoji: '🥉', color: '#cd7f32' };
    return { message: 'Keep practicing! 📚', emoji: '📖', color: '#8b949e' };
  };

  if (quizComplete) {
    const result = getScoreMessage();
    return (
      <section id="quiz" className="quiz">
        <div className="section-container">
          <div className="quiz-complete">
            <div className="complete-icon" style={{ color: result.color }}>
              {result.emoji}
            </div>
            <h2 className="complete-title">Quiz Complete! 🎉</h2>
            <p className="complete-message" style={{ color: result.color }}>
              {result.message}
            </p>
            <div className="score-display">
              <div className="score-circle">
                <span className="score-number">{score}</span>
                <span className="score-total">/{quizQuestions.length}</span>
              </div>
              <p className="score-percentage">
                {Math.round((score / quizQuestions.length) * 100)}% Correct
              </p>
            </div>
            <div className="answer-summary">
              {answers.map((ans, idx) => (
                <div 
                  key={idx} 
                  className={`summary-dot ${ans.correct ? 'correct' : 'incorrect'}`}
                  title={`Question ${idx + 1}`}
                />
              ))}
            </div>
            <button className="restart-btn" onClick={resetQuiz}>
              <span>↻</span> Restart Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="quiz">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">🧠 Challenge</span>
          <h2 className="section-title">Git Mastery Quiz</h2>
          <p className="section-subtitle">
            Test your knowledge with {quizQuestions.length} real-world DevOps interview questions
          </p>
        </div>

        <div className="quiz-card">
          <div className="quiz-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
            <span className="progress-text">
              Question {currentQuestion + 1}/{quizQuestions.length}
            </span>
          </div>

          <div className="question-container">
            <h3 className="question-text">{question.question}</h3>
            
            <div className="options-grid">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${
                    selectedAnswer === index ? 'selected' : ''
                  } ${
                    showResult && index === question.correct ? 'correct' : ''
                  } ${
                    showResult && selectedAnswer === index && selectedAnswer !== question.correct ? 'incorrect' : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {showResult && index === question.correct && (
                    <span className="option-icon correct">✓</span>
                  )}
                  {showResult && selectedAnswer === index && selectedAnswer !== question.correct && (
                    <span className="option-icon incorrect">×</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="quiz-actions">
            {!showResult ? (
              <button 
                className="next-btn"
                onClick={handleNext}
                disabled={selectedAnswer === null}
              >
                Check Answer
              </button>
            ) : (
              <button 
                className="next-btn primary"
                onClick={handleNextQuestion}
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
              </button>
            )}
          </div>

          {showResult && (
            <div className={`result-message ${selectedAnswer === question.correct ? 'success' : 'error'}`}>
              {selectedAnswer === question.correct ? (
                <>
                  <span className="result-icon">✓</span>
                  <span>Correct! Well done!</span>
                </>
              ) : (
                <>
                  <span className="result-icon">×</span>
                  <span>Incorrect. The correct answer is {String.fromCharCode(65 + question.correct)}</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Quiz;
