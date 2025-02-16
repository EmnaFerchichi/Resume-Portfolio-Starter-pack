import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/Emna_Pic.png" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="/images/Emna_Pic.png"
            alt="Emna's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a className="button" href="/CV_Emna_FERCHICHI_QA.pdf" download="CV_Emna_FERCHICHI_QA.pdf">
                  <i className="fa fa-download"></i>Download Resume
                </a>
    
                
              </p>
              <a className="button" href="/ISTQB CTFL V4.0 CERTIFICATE-Emna FERCHICHI.pdf" download="ISTQB CTFL V4.0 CERTIFICATE-Emna FERCHICHI.pdf">
                  <i className="fa fa-download"></i>Download My ISTQB CTFL V4.0 Certificate
                </a>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default About;
