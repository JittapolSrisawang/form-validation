import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepassword, setErrorRepassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [repasswordColor, setRepasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    if (userName.length > 7) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("Please enter at least 8 characters");
      setUserNameColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("You have not given a correct e-mail address");
      setEmailColor("red");
    }

    if (password.length > 7) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Please enter at least 8 characters");
      setPasswordColor("red");
    }

    if (repassword != "" && repassword === password) {
      setErrorRepassword("");
      setRepasswordColor("green");
    } else {
      setErrorRepassword("Values could not be confirmed");
      setRepasswordColor("red");
    }
  };
  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Sign Up</h2>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            style={{ borderColor: repasswordColor }}
          />
          <small style={{ color: repasswordColor }}>{errorRepassword}</small>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FormComponent;
