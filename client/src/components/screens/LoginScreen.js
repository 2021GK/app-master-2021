import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./componentStyles.css";

const LoginScreen =  ({history}) => {


const [email, setEmail]=useState("");
const [password, setPassword]=useState("");
const [error, setError]=useState("");


useEffect(() =>  {

    if(localStorage.getItem("authToken")) {
        history.push("/");
    }
}, [history]);


const loginHandler = async (e) => {
    e.preventDefault();


    const config= {
        headers: {
            "Content-Type":"application/json"
        }
    };


    try {
        const {data}=await axios.post("/api/auth/login", { email, password}, config);
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
<form onSubmit={loginHandler} className="form">
    <h3>Prijava</h3>
    {error && <span className="error-msg">{error}</span>}

    <input type="email" required id="email" className="input-field" placeholder="Unesi email adresu" value={email} onChange={(e) => setEmail(e.target.value)} tabIndex={1}/>

  
    <input type="password" required id="password" className="input-field" placeholder="Unesi lozinku" value={password} onChange={(e) => setPassword(e.target.value)} tabIndex={2}/>
  
    <Link to="forgotpassword" tabIndex={4} className="link">Zaboravljena lozinka?</Link>


    <button type="submit" className="but" tabIndex={3}>Prijava</button>

    <span>Nemate nalog? <Link to="/register" className="link">Registracija</Link></span>
</form>
</div>
 );
};


export default LoginScreen;
