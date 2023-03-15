import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import Questions from '../pages/Questions/Questions'
import Askquestion from '../pages/Askquesion/Askquestion'
import Displayquestions from '../pages/Questions/Displayquestions'
import Tags from '../pages/Tags/Tags'
import Users from '../pages/Users/Users'
import UserProfile from '../pages/userProfile/UserProfile'

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Auth' element={<Auth />}></Route>
            <Route path='/Questions' element={<Questions />}></Route>
            <Route path='/AskQuestion' element={<Askquestion />}></Route>
            <Route path='/Questions/:id' element={<Displayquestions />}></Route>
            <Route path='/Tags' element={<Tags />}></Route>
            <Route path='/Users' element={<Users />}></Route>
            <Route path='/Users/:id' element={<UserProfile />}></Route>
        </Routes>
    )
}

export default AllRoutes