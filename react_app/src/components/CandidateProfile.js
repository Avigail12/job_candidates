import { Link,useParams, useLocation } from "react-router-dom";
import  React,{ useState, useEffect } from 'react';

function CandidateProfile(props) {
    const { id } = useParams();
    const location = useLocation();
    const { candidate } = location.state;
    const candidateId = id

    return (
        <div className="candidate-profile">
            {/*Image */}
            <div className="new-candidate-avatar">
                <img src={`${candidate.avatar}`} />
            </div>
            <div className="candidate-profile-details" >
                {/* <h1>{candidate.first_name + " " + candidate.last_name}</h1> */}
                {/* name */}
                <label>Name:</label>
                <div className="candidate-name" >{candidate.first_name + " " + candidate.last_name}</div>
                {/* email */}    
                <label>Email:</label>            
                <div className="candidate-name" >{candidate.email}</div>
                {/* gender */}
                <label>Gender:</label>  
                <div className="candidate-name" >{candidate.gender}</div> 
                {/* job_title */}
                <label>Job title:</label>
                <div className="candidate-name" >{candidate.job_title}</div>                                
                {/* job_description */}
                <label>Job description:</label>
                <div className="candidate-name" >{candidate.job_description}</div>                            
            </div>
        </div>
    )
}
export default CandidateProfile;