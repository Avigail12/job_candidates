import React,{ useState } from 'react';
import './CSS.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register(props) {
    const navigate  = useNavigate();

    //New User
    const [newUser, setNewUser] = useState({ username: "", email:"", password: "", confirmPassword: ""})// 

    //Whether to allow saving - required fields
    const [validUsername, setvalidUsername] = useState("");
    const [validEmail, setvalidEmail] = useState("");
    const [validPassword, setValidPassword] = useState();
    const [validConfirmPassword, setValidConfirmPassword] = useState();

    const [flagValidUsername, setflagValidUsername] = useState(false);
    const [flagValidEmail, setflagValidEmail] = useState(false);
    const [flagValidPassword, setflagValidPassword] = useState(false);
    const [flagValidConfirmPassword, setflagValidConfirmPassword] = useState(false);

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [token, setToken] = useState();

    function addnewUserToApi(newUser) {
        console.log(newUser);
        axios.post('http://localhost:8080/api/auth/signup', newUser).then(res => {
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
            setNewUser({ ...newUser, username: username })
            setvalidUsername("")
            setUsername(username);
        }
    }
    //Validation on the Phone
    function ValidationEmail(email) {
        var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        setflagValidEmail(false)
        if (email.length > 0) setflagValidEmail(true)


        var valid = emailRegex.test(email);
        if(!valid){    
            setvalidEmail("Email not valid");
            setflagValidEmail(false)  
        }
        else {
            setNewUser({ ...newUser, email: email })

            setvalidEmail("")
            
            setEmail(email);
        }

    }
    //Validation on the Title
    function ValidationPassword(password) {
 
        setflagValidPassword(false)
        if (password.length > 0) setflagValidPassword(true)

        // var valid = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        // if(!valid){    
        //     setValidPassword("password must containing at least 8 characters, 1 number, 1 upper and 1 lowercase [duplicate]");
        //     setflagValidPassword(false)  
        // }
        // else{
            setNewUser({ ...newUser, password: password })

            setPassword(password);
        // }

    }

    function ValidationConfirmPassword(confirmPassword) {
 
        setflagValidConfirmPassword(false)
        if (confirmPassword.length > 0) setflagValidConfirmPassword(true)

        if(confirmPassword != password){    
            setValidConfirmPassword("The confirmPassword does not match אם פשדד'םרג");
            setflagValidConfirmPassword(false)  
        }
        else{
            setNewUser({ ...newUser, confirmPassword: confirmPassword })

            setConfirmPassword(confirmPassword);
        }

    }

    return (
        <div className="candidate-container">
            <div className="new-candidate-container">
            <label>Sign Up</label>
                <div className="new-candidate-inputs">
                    {/* Username */}
                    <div className="new-candidate-input">
                        <div>
                            <label>Username</label>
                            <input type="text" value={username} onChange={(username) => ValidationUsername(username.target.value)} />
                        </div>

                        <div className="labelName">{validUsername}</div>
                    </div>
                    {/* email */}
                    <div className="new-candidate-input">
                        <label>Email</label>
                        <input type="text" value={email} onChange={(email) => ValidationEmail(email.target.value)} />
                    </div>
                    {/* password */}
                    <div className="new-candidate-input">
                        <label>Password</label>
                        <input type="text" value={password} onChange={(password) => ValidationPassword(password.target.value)} />
                    </div>
                    {/* confirmPassword */}
                    <div className="new-candidate-input">
                        <label>Confirm Password</label>
                        <input type="text" value={confirmPassword} onChange={(confirmPassword) => ValidationConfirmPassword(confirmPassword.target.value)} />
                    </div>
                </div>
                <div>
                    <label id="lbltipAddedComment"></label>
                </div>
                <div className="new-candidate-buttons">
                    <button className="button-ok" onClick={() => { addnewUserToApi(newUser) }}>Register</button>

                    <Link to="/"><button className="button-cancel" >Cancel</button></Link>

                </div>
            </div>
        </div>
    )
}

export default Register;