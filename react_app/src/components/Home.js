import React, {Redirect} from 'react';
import Candidate from "./Candidate";
import Login from "./Login"
import { Link } from "react-router-dom";

function Home() {

    if(!localStorage.token){
        return <Login />
    }else{
        return <Candidate />
    }
}

export default Home;
