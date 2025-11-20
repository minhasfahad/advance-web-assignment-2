import React from "react";
import "../styles/Contact.css";
import cmpimg from "../assets/img/company-img.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="bg">
        <div
          className="row row1"
          style={{ padding: "10px", margin: "50px 150px" }}
        >
          <div className="col-6">
            <div className="company-info">
              <i class="fas fa-map-marker-alt fa-2x text-red"></i>
              <h3>Location</h3>
            </div>
            <p>#2661 Janakpuri Colony, city name, town name</p>
            <div className="company-info">
              <i class="far fa-envelope fa-2x text-red"></i>
              <h3> Email</h3>
            </div>
            <p>harshitvashisth@mycompany.com</p>
            <div className="company-info">
              <i class=" fas fa-phone-square-alt fa-2x text-red"></i>
              <h3> Call</h3>
            </div>
            <p>+910101010101</p>
            <img src={cmpimg} alt="Company Image" className="cmp-img" />
          </div>

          <div className="col-6">
            <h2>Contact Us</h2>
            <hr className="hr-line" />
            <p>
              Let us know your questions, suggestions and concerns by filling
              out the contact form below.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <label>
                  Username<b className="text-red">*</b>
                </label>
                <input type="text" required></input>
              </div>
              <div className="form-input">
                <label>
                  Email<b className="text-red">*</b>
                </label>
                <input type="email" required></input>
              </div>
              <div className="form-input">
                <label>
                  Phone<b className="text-red">*</b>
                </label>
                <input type="text" required></input>
              </div>
              <div className="form-input">
                <label>
                  Message<b className="text-red">*</b>
                </label>
                <textarea></textarea>
              </div>
              <button type="submit" className="btnn">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
