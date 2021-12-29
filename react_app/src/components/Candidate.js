import React,{ useState, useEffect } from 'react';
import './CSS.css';
import OneCandidate from './OneCandidate'
import axios from 'axios'

function Candidate() {

    const [candidatesList, setCandidatesList] = useState([]);

    useEffect(() => {
        getCandidates();
    }, [])

    function getCandidates() {

      const token = localStorage.getItem('token')//JSON.parse(
      axios.get('http://localhost:8080/api/candidates', { headers: {"Authorization" : `Bearer ${token}`} }).then(res => {
        setCandidatesList(res.data.payload)
      }).catch((error) => {

      });
    }

    return (
        <div className="candidate-container">
            <label>Candidates</label>
            <div className="candidates-container">
                {/*Search, pass the list  */}
                {candidatesList.map((candidate, key) =>
                    <OneCandidate candidate={candidate}/>
                )}             
            </div>
        </div>
    )
}

export default Candidate;