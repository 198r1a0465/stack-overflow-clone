import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
const HomeMainbar = () => {
  var questionList =[{
     _id:1,
     upVotes:3,
     downVotes:2,
     noOfAnswers:2,
     questionTitle:"What is a function?",
     questionBody:"It meant to be",
     questionTags:["java","node js","react js","mongodb"],
     userPosted:"Mano",
     userId:1,
     askedOn:"jan 1",
     answer:[{
      answerBody:"Answer",
      userAnswerd:"Kumar",
      answeredOn:"jan 2",
      userId:2,
     }]
  },{
     _id:2,
     upVotes:2,
     downVotes:2,
     noOfAnswers:0,
     questionTitle:"What is a function?",
     questionBody:"It meant to be",
     questionTags:["javascript","node js","react js","mongodb"],
     userPosted:"Mano",
     userId:1,
     askedOn:"jan 1",
     answer:[{
      answerBody:"Answer",
      userAnswerd:"Kumar",
      answeredOn:"jan 2",
      userId:2,
     }]
  },{
    _id:3,
     upVotes:1,
     downVotes:2,
     noOfAnswers:0,
     questionTitle:"What is a function?",
     questionBody:"It meant to be",
     questionTags:["java","R","react js","mongodb"],
     userPosted:"Mano",
     userId:1,
     askedOn:"jan 1",
     answer:[{
      answerBody:"Answer",
      userAnswerd:"Kumar",
      answeredOn:"jan 2",
      userId:2,
     }]
  }
]
const location=useLocation()
const user=1;
const navigate =useNavigate()
const checkAuth=()=>{
  if(user === null){
  alert("login or signup to ask a question");
  navigate('/Auth');
  }
  else{
    navigate('/AskQuestion');
  }
}

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
        location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
        } 
        <button onClick={checkAuth}  className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList==null?
          <h1>Loading...</h1>:
          <>
             <p>{questionList.length} questions</p>
             <QuestionList questionList={questionList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar