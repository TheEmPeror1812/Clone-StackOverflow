import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
    questionTitle: {type: String, required: "Question Must Have A Title"},
    questionBody: {type: String, required: "Question Must Have A Body"},
    questionTags: {type: [String], required: "Question Must Have A Tags"},
    noOfAnswers: {type: Number, default: 0},
    upVote: {type: [String], default: []},
    downVote: {type: [String], default: []},
    userPosted : {type: String, required: "Question Must Have A Author"},
    userId: {type: String},
    askedOn : {type: Date, default: Date.now},
    answer: [{
        answerBody: String,
        userAnswered : String,
        userId: String,
        answerOn: {type: Date, default: Date.now}
    }]
})

export default mongoose.model("Question",QuestionSchema)