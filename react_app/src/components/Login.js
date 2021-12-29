import React,{ useState } from 'react';
import './CSS.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login(props) {
    const navigate  = useNavigate();

    const [user, setUser] = useState({ username: "", password: ""})// 

    //Whether to allow saving - required fields
    const [validUsername, setvalidUsername] = useState("");
    const [validPassword, setValidPassword] = useState();

    const [flagValidUsername, setflagValidUsername] = useState(false);
    const [flagValidPassword, setflagValidPassword] = useState(false);

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [token, setToken] = useState();

    function login(user) {
        if(!username){
            document.getElementById('lbltipAddedComment').innerHTML = 'Username is a required field';
            return;
        }
        if(!flagValidPassword){
            document.getElementById('lbltipAddedComment').innerHTML = validPassword
            return;
        }
        if(!password){
            document.getElementById('lbltipAddedComment').innerHTML = 'Password is a required field'
            return;
        }
        axios.post('http://localhost:8080/api/auth/signin', user).then(res => {
            setToken(res.data.payload);
            localStorage.setItem('token', res.data.payload)
            navigate("/candidates");
        }).catch((error) => {
            document.getElementById('lbltipAddedComment').innerHTML = error.response.data.error_message;
            document.getElementById('lbltipAddedComment').style.color = "red";
        });
        //
    }
    
    //Validation on the Name
    function ValidationUsername(username) {

        if (username.length > 30) {
            setvalidUsername("Invalid value should be less than 30");
            setflagValidUsername(false)
        }
        else {
            setUser({ ...user, username: username })
            setvalidUsername("")
            setUsername(username);
        }
    }

    //Validation on the Title
    function ValidationPassword(password) {
 
        setflagValidPassword(false)
        if (password.length > 0) setflagValidPassword(true)

        var valid = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        if(!valid){    
            setValidPassword("password must containing at least 8 characters, 1 number, 1 upper and 1 lowercase [duplicate]");
            setflagValidPassword(false)  
        }
        else{
            setUser({ ...user, password: password })

            setPassword(password);
        }

    }

    return (
        <div className="candidate-container">
            <div className="new-candidate-container">
            <label>Sign In</label>
                <div className="new-candidate-inputs">
                    <div className="new-candidate-input">
                    If you already have an account 
                    <Link to="/signup"> click here</Link>
                    </div>
                    {/* Username */}
                    <div className="new-candidate-input">
                        <div>
                            <label>Username</label>
                            <input type="text" value={username} onChange={(username) => ValidationUsername(username.target.value)} />
                        </div>

                        <div className="labelName">{validUsername}</div>
                    </div>
                    {/* password */}
                    <div className="new-candidate-input">
                        <label>Password</label>
                        <input type="text" value={password} onChange={(password) => ValidationPassword(password.target.value)} />
                    </div>
                </div>
                <div>
                    <label id="lbltipAddedComment"></label>
                </div>
                <div className="new-candidate-buttons">
                    <button className="button-ok" onClick={() => { login(user) }}>Login</button>

                    <Link to="/"><button className="button-cancel" >Cancel</button></Link>

                </div>
            </div>
        </div>
    )
}

export default Login;