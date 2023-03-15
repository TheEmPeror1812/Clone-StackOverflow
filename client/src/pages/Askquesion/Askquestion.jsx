import React,{useState} from 'react'
import "./Askquestion.css"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {askQuestion} from "../../actions/question"

function Askquestion() {
  const [questionTitle, setquestionTitle] = useState("")
  const [questionBody, setquestionBody] = useState("")
  const [questionTags, setquestionTags] = useState("")

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate  = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({questionTitle,questionBody,questionTags})
    dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted: User.result.name,userId : User?.result?._id},navigate))
  }

  const handleEnter = (e) => {
    if(e.key === "Enter"){
      setquestionBody(questionBody + "\n")
    }
  }

  return (
    <div className='ask-question'>
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and imagine you're are asking a question to another person</p>
              <input type="text" 
              id='ask-ques-title' 
              onChange={(e) => {setquestionTitle(e.target.value)}}
              placeholder='eg : Is there an R function for finding the index of an element in a vector' />
            </label>

            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea onKeyPress={handleEnter} onChange={(e) => {setquestionBody(e.target.value)}}  id="ask-ques-body" cols="30" rows="6"></textarea>
            </label>

            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add upto 5 tags to describe what that question is about</p>
              <input type="text"  
              id='ask-ques-tags' 
              onChange={(e) => {setquestionTags(e.target.value.split(" "))}}
              placeholder='eg : (xml, javascript, python)' />
            </label>
          </div>
          <input type="submit" value="Post Your Question" className='review-btn' />
        </form>
      </div>
    </div>
  )
}

export default Askquestion;