import { useState } from "react";
import axios from "axios";
import "./componentStyles.css";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <form onSubmit={forgotPasswordHandler} className="form">
        <h3>Zaboravljena lozinka</h3>
        {error && <span className="error-msg">{error}</span>}
        {success && <span className="error-msg">{success}</span>}
        
          <p className="p-text">
          Na email adresu sa kojom je nalog registrovan biće poslat link za postavljanje nove lozinke 
          </p>
          
          <input
            className="input-field"
            type="email"
            required
            id="email"
            placeholder="Email adresa"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
        <button type="submit" className="but">
          Slanje linka
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;