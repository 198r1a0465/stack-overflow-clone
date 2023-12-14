import React from 'react'
import QuestionsDetails from './QuestionsDetails'
import {Link} from 'react-router-dom';
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar';
const DisplayAnswer = ({question}) => {
  return (
    <div>
        {
            question.answer.map((ans)=>(
                <div className="display-ans" key={ans._id}>
                   <p>{ans.answerBody}</p>
                <div className="question-actions-user">
                    <div>
                    <button type='button'>Share</button>
                    <button type='button'>Delete</button>
                   </div>
                    <div>
                   <p>answered {ans.answeredOn}</p>
                    <Link to={`/User/${question.userId}`}  style={{color:"#0086d8"}} className='user-link'>
                    
                        <Avatar backgroundColor="green" px='8px' py='5px' >{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                        <div style={{textDecoration:"none"}}>
                        {ans.userAnswered}
                        </div>
                 </Link>
                 </div>
                </div>
            </div>
            ))
        }

    </div>
  )
}

export default DisplayAnswer