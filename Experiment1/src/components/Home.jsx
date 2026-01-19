import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="NavBar">
        <div className="Heading">
          <h1>Home Page</h1>
        </div>
        <ul>
          <li>
            <Link to="/" className="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="About">
              About
            </Link>
          </li>
        </ul>
        <div className="NameHeading">
          <h1 className="Name">Shubham Rana</h1>
        </div>
        {/* <div className="Button">
          <Button />
        </div> */}
      </div>
    </div>
  );
};
export default Home;
