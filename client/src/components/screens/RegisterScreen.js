import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./componentStyles.css";

const RegisterScreen =  ({history}) => {

const [email, setEmail]=useState("");
const [password, setPassword]=useState("");
const [confirmPassword, setConfirmPassword]=useState("");
const [error, setError]=useState("");


useEffect(() =>  {

    if(localStorage.getItem("authToken")) {
        history.push("/");
    }
}, [history]);


const registerHandler = async (e) => {
    e.preventDefault();


    const config= {
        headers: {
            "Content-Type":"application/json"
        }
    }

    if(password !== confirmPassword) {
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
            setError("")
        },5000);
        return setError("passwords do not match");
    }

    try {
        const {data}=await axios.post("/api/auth/register", {email, password}, config);

        localStorage.setItem("authToken", data.token);
        localStorage.setItem("currentEmail", email);



        history.push("/");
    } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
            setError("");
        }, 5000);
    }
};


 return (
<div>
<form onSubmit={registerHandler} className="form">
    <h3>Registracija</h3>
    {error && <span className="error-msg">{error}</span>}

    <input type="email" required id="email" className="input-field" placeholder="Unesi email adresu" value={email} onChange={(e) => setEmail(e.target.value)}/>


    <input type="password" required id="password" className="input-field" placeholder="Unesi lozinku" value={password} onChange={(e) => setPassword(e.target.value)}/>

    <input type="password" required id="confirmpassword" className="input-field" placeholder="Potvrdi lozinku" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>


    <button type="submit" className="but">Registracija</button>

    <span >Već imaš nalog? <Link to="/login" className="link">Prijavi se</Link></span>
</form>
</div>
 );
};


export default RegisterScreen;
