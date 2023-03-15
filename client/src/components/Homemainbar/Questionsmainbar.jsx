import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

function Questionsmainbar({questions}) {
  return (
    <div className='display-question-container'>
        <div className='display-votes-ans'>
            <p>{questions.upVote.length - questions.downVote.length}</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{questions.noOfAnswers}</p>
            <p>answers</p>
        </div>
        <div className='display-question-details'>
            <Link to={`/Questions/${questions._id}`} className="question-title-link">{questions.questionTitle}</Link>
            <div className="display-tags-time">
                <div className="display-tags">
                    {
                        questions.questionTags.map((item,index)=>(
                            <p key={index}>{item}</p>
                        ))
                    }
                </div>
                <p className='display-time'>
                    asked {moment(questions.askedOn).fromNow()} {questions.userPosted}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Questionsmainbar;