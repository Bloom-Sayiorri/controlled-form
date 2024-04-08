import React, { useState } from 'react'

const QuestionForm = () => {
  const [ formData, setFormData ] = useState({
    id: 1,
    question: '',
    correctAnswer: [
      { answer1: '' },
      { answer2: '' },
      { answer3: '' },
      { answer4: '' }
    ]
  })

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
    
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      <label htmlFor='question'>Question</label>
      <input 
        type='text'
        id='question'
        name='question'
        value={formData.question}
        onChange={handleChange}
      />
      <label htmlFor='answer'>Answers</label>
      <input 
        type='checkbox'
        id='correctAnswer'
        name='correctAnswer'
        value={formData.answer}
        onChange={handleChange}
      />
      <label htmlFor='answer'>Answer1</label>
      <input 
        type='checkbox'
        id='correctAnswer'
        name='correctAnswer'
        value={formData.answer}
        onChange={handleChange}
      />
      <label htmlFor='answer'>Answer2</label>
      <input 
        type='checkbox'
        id='correctAnswer'
        name='correctAnswer'
        value={formData.answer}
        onChange={handleChange}
      />
      <label htmlFor='answer'>Answer3</label>
      <input 
        type='checkbox'
        id='correctAnswer'
        name='correctAnswer'
        value={formData.answer}
        onChange={handleChange}
      />
      <label htmlFor='answer'>Answer4</label>
      <input 
        type='checkbox'
        id='correctAnswer'
        name='correctAnswer'
        value={formData.answer}
        onChange={handleChange}
      />
    </form>
  )
}

export default QuestionForm