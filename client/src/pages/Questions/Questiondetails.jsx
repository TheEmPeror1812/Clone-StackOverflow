import React, { useState } from 'react';
import moment from "moment"
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import copy from "copy-to-clipboard"

import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import "./Questions.css"
import { deleteQuestion, postAnswer, voteQuestion } from '../../actions/question.js';
import Avatar from "../../components/Avatar/Avatar"
import Displayanswers from './Displayanswers';

function Questiondetails() {

    const { id } = useParams()
    const questionList = useSelector(state => state.questionsReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const url = "https://stackoverflow-clone-backend-dp3s.onrender.com"

    const [Answer, setAnswer] = useState("")
    const User = useSelector((state) => (state.currentUserReducer))

    const handlePosAns = (e, answerLength) => {
        e.preventDefault()
        if (User === null) {
            alert("Login or signup first to answer the queston")
            navigate("/Auth")
        } else {
            if (Answer === "") {
                alert("Enter an answer before submitting")
            } else {
                dispatch(postAnswer({
                    id,
                    noOfAnswers: answerLength + 1,
                    answerBody: Answer,
                    userAnswered: User.result.name,
                    userId : User.result._id
                }))
                
            }
        }
    }

    const handleShare = () => {
        copy(url + location.pathname)
        alert("URL Copied")
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id, "upVote", User.result._id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, "downVote", User.result._id))
    }

    // let questionList = [{
    //     _id: "1",
    //     upvotes: 3,
    //     downvotes: 2,
    //     votes: 3,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function",
    //     questionbody: "Its meant to be",
    //     questionTags: ["java", "node js", "react js", "mongodb"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody : "Answer",
    //       userAnswered: "kumar",
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }]
    //   }, {
    //     _id: "2",
    //     upvotes: 3,
    //     downvotes: 2,
    //     votes: 0,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function",
    //     questionbody: "Its meant to be",
    //     questionTags: ["javascript", "node js", "python", "R"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody : "Answer",
    //       userAnswered: "kumar",
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }]
    //   }, {
    //     _id: "3",
    //     upvotes: 3,
    //     downvotes: 2,
    //     votes: 1,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function",
    //     questionbody: "Its meant to be",
    //     questionTags: ["javascript", "node js", "python", "R"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody : "Answer",
    //       userAnswered: "kumar",
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }]
    //   }]

    return (
        <div className='question-details-page'>
            {
                questionList.data == null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionList.data.filter((item) => item._id === id).map((question) => (
                                <div key={question._id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className='question-votes'>
                                                <img src={upvote} alt="" width="18"  className='votes-icon' onClick={handleUpVote}/>
                                                <p>{question.upVote.length - question.downVote.length}</p>
                                                <img src={downvote} alt="" width="18" className='votes-icon'  onClick={handleDownVote}/>

                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map((item, index) => (
                                                            <p key={index}>{item}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button type='button' onClick={handleShare}>Share</button>
                                                        {
                                                            User?.result?._id === question?.userId && (
                                                                <button type='button' onClick={handleDelete}>Delete</button>
                                                            )
                                                        }

                                                    </div>
                                                    <div>
                                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                                        <Link to={`/Users/${question.userId}`} className="user-link" style={{ color: "#0086d8" }}>
                                                            <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                            {
                                                                console.log(question)
                                                            }
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} Answers</h3>
                                                <Displayanswers key={question._id} handleShare={handleShare} question={question} />
                                            </section>
                                        )
                                    }
                                    <section className='post-ans-container'>
                                        <h3>
                                            Your Answer
                                        </h3>
                                        <form onSubmit={(e) => { handlePosAns(e, question.answer.length) }}>
                                            <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br />
                                            <input type="submit" className='post-ans-btn' value="Post Your Answer" />
                                        </form>
                                        <p>
                                            Browse other question tagged
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to="/Tags" key={tag} className="ans-tags">{tag}</Link>
                                                ))
                                            } or {
                                                <Link to="/AskQuestion" style={{ textDecoration: "none", color: "#009dff" }}>ask your own question.</Link>
                                            }
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default Questiondetails