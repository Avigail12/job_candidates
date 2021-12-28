import { Routes , Route } from 'react-router-dom';
import React from 'react'
import Candidate from "./components/Candidate";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import CandidateProfile from "./components/CandidateProfile";

function GetRoutes(){

    return (
        <Routes>
            <Route path='/candidates' element={<Candidate/>} />
            <Route path='/candidates/:id' element={<CandidateProfile/>} />
            <Route path='/signin' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>

    )
}

export default GetRoutes
