import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom"
import "./Homemainbar.css"
import QuestionList from './QuestionList'


function Homemainbar() {
  // let questionList = [{
  //   id: 1,
  //   upvotes: 3,
  //   downvotes: 2,
  //   votes: 3,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function",
  //   questionbody: "Its meant to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswerd: "kumar",
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // }, {
  //   id: 2,
  //   upvotes: 3,
  //   downvotes: 2,
  //   votes: 0,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function",
  //   questionbody: "Its meant to be",
  //   questionTags: ["javascript", "node js", "python", "R"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswerd: "kumar",
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // }, {
  //   id: 3,
  //   upvotes: 3,
  //   downvotes: 2,
  //   votes: 1,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function",
  //   questionbody: "Its meant to be",
  //   questionTags: ["javascript", "node js", "python", "R"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswerd: "kumar",
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // }]

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate();

  const questionList = useSelector(state => state.questionsReducer)


  const checkAuth = () =>{
    if(user === null){
      alert("Login or Signup to ask question");
      navigate("/Auth");
    }
    else{
      navigate("/AskQuestion")
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === "/" ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>
                {questionList.data.length} questions
                <>
                  {
                    <QuestionList questionsList={questionList.data} />
                  }
                </>
              </p>
            </>
        }
      </div>
    </div>
  )
}

export default Homemainbar