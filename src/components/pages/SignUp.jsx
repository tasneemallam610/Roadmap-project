import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import "./signup.css";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      const name = e.target.elements.name.value;
      localStorage.setItem("userName", name);
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
  };
    

  return (
    <div className="sign-up">

      <div className="left-side">
        <div className="con">

          <div className="icon">
            <FcGraduationCap />
          </div>

          <h3>CS Roadmap</h3>
          <p>Build. Grow. Learn</p>

        </div>
      </div>

      <div className="right-side">

        <h1>Create Your Account</h1>
        <p>Start your interesting journey with us!</p>

        <form className="formm"    onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter your name"
             name="name"
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Sign Up
          </button>

        </form>

      </div>

    </div>
  );
}

export default SignUp;