import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./componentStyles.css";

const ResetPasswordScreen = ({match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Lozinke se ne slažu!");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <form
        onSubmit={resetPasswordHandler}
        className="form"
      >
        <h3>Оbnova šifre</h3>
        {error && <span className="error-msg">{error} </span>}
        {success && (
          <span className="error-msg">
            {success} <Link to="/login" className="link">Prijava</Link>
          </span>
        )}
          <input
            type="password"
            required
            id="password"
            className="input-field"
            placeholder="Nova lozinka"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
        
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Potvrda nove lozinke"
            className="input-field"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
      
        <button type="submit" className="but">
          Obnavljanje lozinke
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;