import React from 'react'

const QuestionItem = ({ question, onUpdateQuestion, onDeleteQuestion }) => {
  const { id, prompt, answers, correctIndex } = question

  // const options = question.map((answer, index) => {
  //   return (
  //     <option key={index} value={index}>{question.answer}</option>
  //   )
  // });

  const options = answers.map((answer, index) => {
    return (
      <option key={index} value={index}>
        {answer}
      </option>
    )});

  function handleUpdateClick() {
    const data = {
      correctIndex: correctIndex,
    }
    fetch(`http://localhost:3001/questions/${question.id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({data})
    })
    .then((r) => r.json())
    .then(() => onUpdateQuestion(question))
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3001/questions/${question.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteQuestion(question));
  }

  return (
    // <li>
    //   <h3>{prompt}</h3>
    //   <label htmlFor='answers'>Choose an answer: </label>
    //   <select id='answers' name='answers' value={correctAnswer} onChange={handleUpdateChange}>
    //     {options}
    //   </select>
    //   <button onClick={handleDeleteClick}>Delete</button>
    // </li>
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateClick}>
          {options}
        </select>
      </label>
      <button type="submit" onClick={handleDeleteClick}>Delete Question</button>
    </li>
  )
}

export default QuestionItem