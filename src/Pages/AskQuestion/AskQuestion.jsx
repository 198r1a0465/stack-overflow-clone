import React from 'react'
import './AskQuestion.css'
import { useNavigate } from 'react-router-dom';
const AskQuestion = () => {
   
  return (
     <div className='ask-question'>
        <div className="ask-ques-container"></div>
        <h1>Ask a public Question</h1>
        <from >
           <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and imagine you’re asking a question to another person.</p>
              <input type='text' id='ask-ques-title' placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
              <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
              <input type='text' id='ask-ques-tags' placeholder='e.g.(xml typescript wordpress)'/>
            </label>
           </div>
           <input type='submit' value='Review your question'id='sub'/>
        </from>
     </div>
  )
}

export default AskQuestion