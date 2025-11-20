import React from 'react'
import showcase1 from "../assets/img/showcase-photo3.jpg";
import showcase2 from "../assets/img/showcase-photo1.jpg";

import { Link } from 'react-router';

const Cards = () => {
  return (
    <section className="showcase">
        <div className="d-flex" style={{marginBottom:"80px"}}>
          <div className="img-box">
            <img src={showcase1} alt="Show case img 3" />
          </div>
          <div className="text-box">
            <h1>DEGANVY, U.K</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              repudiandae sapiente ea esse vel nisi pariatur laboriosam quaerat
              nam odio officia voluptate necessitatibus vero ex, quod facilis,
              ad cum? Iure!
            </p>
            <Link to="/about" className="about-link">
              More
            </Link>
          </div>
        </div>
        <div className="d-flex">
          <div className="text-box">
            <h1>DESERT, EGYPT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur soluta suscipit amet corrupti, delectus nihil itaque,
              architecto, laudantium asperiores accusamus exercitationem dolore
              obcaecati nulla quidem iusto enim minima? Unde, quibusdam!
            </p>
            <Link to="/about" className="about-link">
              More
            </Link>
          </div>

          <div className="img-box">
            <img src={showcase2} alt="show case img 1" />
          </div>
        </div>
      </section>
  )
}

export default Cards