import React from 'react'
import questions from './questions'

const Questions = () => {
  const displayedQuestion = questions.map((question) => {
    return(
      <section className='' key={question.id}>
        <h3>{question.prompt}</h3>
        <h5>{question.answers}</h5>
      </section>
    )
  })
  return (
    <div className=''>
      {displayedQuestion}
    </div>
  )
}

export default Questions