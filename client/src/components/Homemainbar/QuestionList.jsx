import React from 'react'
import Questionsmainbar from './Questionsmainbar'

function QuestionList({questionsList}) {
  return (
    <>
        {
            questionsList.map((question)=>(
                <Questionsmainbar questions={question} key={question._id} />
            ))
        }
    </>
  )
}

export default QuestionList