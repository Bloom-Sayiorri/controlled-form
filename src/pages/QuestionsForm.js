import React, { useState } from 'react'

function QuestionsForm({ onAddQuestion }) {
    const [ formData, setFormData ] = useState({
        prompt: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const questionData = {
            prompt: formData.prompt,
            answers: [
                formData.answer1,
                formData.answer2,
                formData.answer3,
                formData.answer4,
            ],
            correctIndex: parseInt(formData.correctIndex, 10)
        };

        fetch("http://localhost:3001/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(questionData),
        })
        .then((r) => r.json())
        .then((newQuestion) => onAddQuestion(newQuestion))
        // e.target.reset()
    };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
        <div className="flex w-full items-center">
            <label htmlFor="prompt" className="mr-3">Prompt: </label>
            <input
                type="text"
                id="prompt"
                name="prompt"
                value={formData.prompt}
                onChange={handleChange}
                className="rounded-md border-zinc-950 border-2 w-1/2"
            />
        </div>
        <div className="flex w-full items-center">
            <label htmlFor="answer1" className="mr-3">Answer1: </label>
            <input
                type="text"
                id="answer1"
                name="answer1"
                value={formData.answer1}
                onChange={handleChange}
                className="rounded-md border-zinc-950 border-2 w-1/2"
            />
        </div>
        <div className="flex w-full items-center">
            <label htmlFor="answer2" className="mr-3">Answer2: </label>
            <input
                type="text"
                id="answer2"
                name="answer2"
                value={formData.answer2}
                onChange={handleChange}
                className="rounded-md border-zinc-950 border-2 w-1/2"
            />
        </div>
        <div className="flex w-full items-center">
            <label htmlFor="answer3" className="mr-3">Answer3: </label>
            <input
                type="text"
                id="answer3"
                name="answer3"
                value={formData.answer3}
                onChange={handleChange}
                className="rounded-md border-zinc-950 border-2 w-1/2"
            />
        </div>
        <div className="flex w-full items-center">
            <label htmlFor="answer4" className="mr-3">Answer4: </label>
            <input
                type="text"
                id="answer4"
                name="answer4"
                value={formData.answer4}
                onChange={handleChange}
                className="rounded-md border-zinc-950 border-2 w-1/2"
            />
        </div>
        <div className="flex w-full items-center">
            <label>
            Correct Answer:
            <select
                name="correctIndex"
                value={formData.correctIndex}
                onChange={handleChange}
            >
                <option value="0">{formData.answer1}</option>
                <option value="1">{formData.answer2}</option>
                <option value="2">{formData.answer3}</option>
                <option value="3">{formData.answer4}</option>
            </select>
            </label>
        </div>
        <div className="flex w-full items-center">
            <button className='bg-blue-400 text-white rounded-lg p-2 w-1/2'>Submit</button>
        </div>
        
    </form>
  )
}

export default QuestionsForm