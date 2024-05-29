import React, { useState } from 'react'

const QuestionForm = ({ onAddQuestion }) => {
  const [ formData, setFormData ] = useState({
    // prompt: '',
    // answers: {
    //   answer1: '',
    //   answer2: '',
    //   answer3: '',
    //   answer4: '',
    // },
    // correctIndex: 0,
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    selectedAnswer: "",
    correctIndex: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
        ...formData,
        [name]: value
    }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const itemData = {
    //   question: formData.question,
    //   answer1: formData.correctAnswer.answer1,
    //   answer2: formData.correctAnswer.answer2,
    //   answer3: formData.correctAnswer.answer3,
    //   answer4: formData.correctAnswer.answer4,
    //   correctIndex: formData.correctIndex,
    // }
    const itemData = {
      prompt: formData.prompt,
      answers: [
        formData.answer1,
        formData.answer2,
        formData.answer3,
        formData.answer4,
      ],
      correctIndex: parseInt(formData.correctIndex, 10)
    }
    fetch('http://localhost:3001/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(itemData)
    })
    .then(r => {
      if(r.ok) {
        return r.json();
      } else {
        throw new Error('Failed to create a new question')
      }})
      .then((question) => onAddQuestion(question))
    // .then(data => {setFormData(prevState => ({
    //   ...prevState,
    //     ...data
    //   }))}
    // )
    .catch(err => {
      console.log("Error creating question", err);
    })
  };

  return (
    <form className='flex flex-col items-center gap-8' onSubmit={handleSubmit}>
      <div className='flex'>
        <label htmlFor='prompt'>Prompt</label>
        <input
          className=''
          type='text'
          id='prompt'
          name='prompt'
          value={formData.prompt}
          onChange={handleChange}
        />
      </div>
      <div className='flex'>
        <label htmlFor='answer'>Answer1</label>
        <input 
          type='text'
          id='correctAnswer'
          name='correctAnswer'
          value={formData.answer1}
          onChange={handleChange}
        />
      </div> 
      <div className='flex'>
        <label htmlFor='answer'>Answer2</label>
        <input 
          type='text'
          id='correctAnswer'
          name='correctAnswer'
          value={formData.answer2}
          onChange={handleChange}
        />
      </div>
      <div className='flex'>
        <label htmlFor='answer'>Answer3</label>
        <input 
          type='text'
          id='correctAnswer'
          name='correctAnswer'
          value={formData.answer3}
          onChange={handleChange}
        />
      </div>
      <div className='flex'>
        <label htmlFor='answer'>Answer4</label>
        <input 
          type='text'
          id='correctAnswer'
          name='correctAnswer'
          value={formData.answer4}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className=''>Submit</button>
    </form>
  )
}

export default QuestionForm