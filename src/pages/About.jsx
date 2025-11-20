import React from "react";
import "../styles/About.css";
import "../styles/Home.css";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <>
    <Navbar/>
    <section className="about-us-page">
      <h2>About Us</h2>
      <hr className="hr-line"></hr>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptate?
        Architecto obcaecati dolore, at, quisquam neque asperiores inventore aut
        quibusdam id vitae ea labore minus delectus similique, tempore ducimus
        fugit!
      </p>
      <div className="list">
        <div>
          <ul className="listitems">
            <li>
              <i className="fas fa-check">
                <span>Lorem ipsum dolor sit.</span>
              </i>
            </li>
            <li>
              <i className="fas fa-check">
                <span>Lorem ipsum dolor sit.</span>
              </i>
            </li>
            <li>
              <i className="fas fa-check">
                <span>Lorem ipsum dolor sit.</span>
              </i>
            </li>
          </ul>
        </div>
        <div>
          <ul className="listitems">
            <li>
              <i className="fas fa-check">
                <span>Lorem ipsum dolor sit.</span>
              </i>
            </li>
            <li>
              <i className="fas fa-check">
                <span>Lorem ipsum dolor sit.</span>
              </i>
            </li>
            <li>
              <i className="fas fa-check">
                <span>Lorem ipsum dolor sit.</span>
              </i>
            </li>
          </ul>
        </div>
      </div>
      <div className="numbers">
        <div className="center">
          <h3>2500</h3>
          <p>Travelled</p>
        </div>
        <div className="center">
          <h3>500</h3>
          <p>Places</p>
        </div>
        <div className="center">
          <h3>400</h3>
          <p>Guide</p>
        </div>
        <div className="center">
          <h3>20</h3>
          <p>Sport</p>
        </div>
      </div>
      <div className="content-and-link">What are you waiting for, reach us right now.
        <Link to="/contact" className="contact-us-link">Contact Us</Link>
      </div>
    </section>
    </>
  );
};

export default About;
