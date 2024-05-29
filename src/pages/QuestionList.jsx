import React from 'react'
import QuestionItem from './QuestionItem';

const QuestionList = ({ questions, setQuestions }) => {

//fetch questions
function handleUpdateQuestion(updatedQuestion) {
  const updatedQuestions = questions.map((question) => {
    if (question.id === updatedQuestion.id) {
      return updatedQuestion;
    } else {
      return question;
    }
  });
  setQuestions(updatedQuestions);
}

function handleDeleteQuestion(deletedQuestion) {
  const updatedQuestions = questions.filter((q) => q.id !== deletedQuestion.id);
  setQuestions(updatedQuestions);
}

  return (
    <div>
      <h1>Questions List</h1>
      <ul>
      {questions.map((question) => {
        return (
          <QuestionItem
            key={question.id}
            question={question}
            onUpdateQuestion={handleUpdateQuestion}
            onDeleteQuestion={handleDeleteQuestion}
          />
        )
      })}
    </ul>
    </div>
    
  )
}

export default QuestionList