import React from 'react'

const Home = ({questions}) => {
  questions = {
    questionName: 'Is React a library'
  }
  return (
    <div>
      <h3>{questions.questionName}</h3>
      <p>{questions.answers}</p>
    </div>
  )
}

export default Home