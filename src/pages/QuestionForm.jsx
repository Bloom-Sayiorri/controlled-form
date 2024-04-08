import React, { useState } from 'react'

const QuestionForm = ({ getNextId }) => {
const [ formData, setFormData ] = useState({
  id: getNextId(),
  question: '',
  correctAnswer: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
  }
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
    const itemData = {
      id: getNextId(),
      question: formData.question,
      correctAnswer: formData.correctAnswer,
      answer1: formData.correctAnswer.answer1,
      answer2: formData.correctAnswer.answer2,
      answer3: formData.correctAnswer.answer3,
      answer4: formData.correctAnswer.answer4,
    }
    fetch('http://localhost:8001/questions', {
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
    .then(data => {setFormData(prevState => ({
        ...prevState,
        ...data
      }))}
    )
    .catch(err => {
      console.log("Error creating question", err);
    });
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