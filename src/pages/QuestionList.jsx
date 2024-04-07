import React, { useEffect, useState } from 'react'
// import questions from '../questions'

const QuestionList = () => {
  const [questionData, setQuestionData] = useState([])
  // const apiUrl = process.env.API_URL
  // let displayed = []
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=30&difficulty=medium&type=multiple")
    .then((response) => response.json())
    .then((data) => console.log(data))
}, [questionData])

  // console.log(displayed.push(display))

  // const displayedQuestion = displayed.map((q) => {
  //   return(
  //     <div className='' key={q.id}>
  //       <h3>Question: {q.question}</h3>
  //       <select
  //         id="type"
  //         name="choices"
  //         value={q.questionData.choices}
  //         onChange={(e) => setQuestionData(e.target.value)}
  //       >
  //         <option value="free">Free</option>
  //       </select>
  //       <p>Category: {q.category}</p>
  //       <p>Correct_answer: {q.correct_answer}</p>
  //       <p>Difficulty: {q.difficulty}</p>
  //       <p>Category: {q.category}</p>
  //       <input type="radio" name="item" id="item" value="item" />
  //     </div>
  //   )
  // })

  return (
    <div className=''>
      {/* {displayed} */}
    </div>
  )
}

export default QuestionList