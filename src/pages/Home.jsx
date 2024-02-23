import React from 'react'

const Home = ({questions}) => {
  questions = {
    questionName: 'Is React a library?',
    answers: ['Yes', 'No'],
    correctAnswer: 'Yes'
  }

  // const rigthAnswer = () => {
  //   if (answers.length > 0){
  //     return
  //   }
  // }
  return (
    <div>
      <ul className="">
        <h4 className='text-lg'>{questions.questionName}</h4>
        <p type='button'>
          {questions.answer}
        </p>
      </ul>
    </div>
  )
}

export default Home