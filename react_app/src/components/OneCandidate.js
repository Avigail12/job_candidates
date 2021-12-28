import { Link } from "react-router-dom";
import  React from 'react';

function OneCandidate(props) {

    //Variable from parent
    const { candidate } = props;

    return (
        <div className="candidate">
            {/*Image */}
            <div className="candidate-avatar">
                <img src={`${candidate.avatar}`} />
            </div>
            <div className="candidate-details" >
                {/* name */}
                <div className="candidate-name" >{candidate.first_name + candidate.last_name}</div>
                {/*job_title */}                
                <div className="candidate-name">{candidate.job_title}</div>
            </div>
            <div className="new-candidate-buttons">
                <Link to={{pathname: `${props.candidate.id}`}} state={{ candidate: candidate }}>
                    <button className="button-ok">Profile</button>
                </Link>
            </div>

        </div>
    )
}
export default OneCandidate;