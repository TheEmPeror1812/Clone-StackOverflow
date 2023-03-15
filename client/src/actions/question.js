import * as api from "../api"

export const askQuestion = (questiondata, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postquestion(questiondata)
    dispatch({ type: "POST_QUESTION", payload: data })
    dispatch(fetchAllQuestions())
    navigate("/")
  } catch (error) {
    console.log(error + "Error Occured in ask Question")
  }
}

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllquestions();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error + "Error Occured in fetch answer")
  }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    const { data } = api.deleteQuestion(id)
    dispatch(fetchAllQuestions())
    navigate("/")
  } catch (error) {
    console.log(error)
  }
}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
  try {
    const { data } = await api.voteQuestion(id, value, userId);
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}

export const postAnswer = (answerdata) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId } = answerdata;
    const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId);
    dispatch({ type: "POST_ANSWER", payload: data })
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error + "Error Occured in post answer")
  }
}


export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    await api.deleteAnswer(id, answerId, noOfAnswers)
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}


