import React from 'react'

const Home = ({questions}) => {
  questions = {
    questionName: 'Is React a library?',
    answer: 'Yes'
  }
  return (
    <div>
      <h3>{questions.questionName}</h3>
      <p type='button'>
        {questions.answer}
      </p>
    </div>
  )
}

export default Home