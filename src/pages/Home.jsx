import React from 'react'

const Home = ({questions}) => {
  questions = {
    questionName: 'Is React a library?',
    answer: 'Yes'
  }
  return (
    <div>
      <h3>{questions.questionName}</h3>
      <input type='button'>
        {/* {questions.answer} */}
      </input>
    </div>
  )
}

export default Home