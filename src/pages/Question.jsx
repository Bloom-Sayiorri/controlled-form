import React, { useEffect, useState } from 'react'
import questions from '../questions'

const Questions = () => {
  const url = process.env.API_URL

  // const displayed = useEffect(() => {
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [question])

  const displayedQuestion = displayed.map((q) => {
    return(
      <div className='' key={q.id}>
        <h3>Question: {q.question}</h3>
        <select
          id="type"
          name="choices"
          value={questionData.choices}
          onChange={(e) => setQuestionData(e.target.value)}
        >
          <option value="free">Free</option>
        </select>
        <p>Category: {q.category}</p>
        <p>Correct_answer: {q.correct_answer}</p>
        <p>Difficulty: {q.difficulty}</p>
        <p>Category: {q.category}</p>
        <input type="radio" name="itzem" id="item" value="item" />
      </div>
    )
  })
  return (
    <div className=''>
      {displayedQuestion}
    </div>
  )
}

export default Questions