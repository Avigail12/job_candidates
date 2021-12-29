import { Routes , Route, BrowserRouter} from 'react-router-dom';
import React, {Redirect} from 'react'
import Candidate from "./components/Candidate";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import CandidateProfile from "./components/CandidateProfile";
import Home from "./components/Home";

function GetRoutes(){

    return (
            <Routes>
                <Route path='/candidates/:id' element={<CandidateProfile/>} />
                <Route path='/candidates' element={<Candidate/>} />
                <Route path='/signin' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
    )
}

export default GetRoutes
