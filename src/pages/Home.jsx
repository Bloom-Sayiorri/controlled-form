import React from 'react'
// import Question from './Question.jsx'
import questions from '../questions'

const Home = () => {
  const display = questions.map((q) => {
    return (
      <div>
        <h3 className='text-2xl font-bold'>{q.prompt}</h3>
        <ul>
            {q.answers.map((ans)=> {
              return (
                <li key={ans.text}>
                  <label>{ans.text}</label>
                  <input type='radio' name='answers' value={ans.isCorrect} />
                </li>
              )
            })}
        </ul>
      </div>
    )
  })

  return (
    // <Question />
    <>{display}</>
  )
}

export default Home