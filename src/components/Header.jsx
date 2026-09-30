import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { MdOutlineSearch } from "react-icons/md";
import "./header.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="name-logo">
          <FcGraduationCap className="logo" />
          <h1>CS Roadmap</h1>
        </div>

        <div className="links">
          <Link to="/" className="tags">
            Home{" "}
          </Link>
          <Link to="Roadmap" className="tags">
            Roadmap{" "}
          </Link>
          <Link to="Reasourses" className="tags">
            Reasourses{" "}
          </Link>
          <Link to="About" className="tags">
            About{" "}
          </Link>
          <Link to="/dashboard" className="iconn">
          <CgProfile />
          </Link>
        </div>

        <div className="search-form">
          <MdOutlineSearch />
          <input type="text" placeholder="Search for Roadmap" />
        </div>

      <div className="in-out">
     <Link to="/login"> <button className="login">Login</button></Link>
   <Link to="/signup">   <button className="signup">Sign up</button> </Link>
</div>
      </div>
    </div>
  );
}

export default Header;
