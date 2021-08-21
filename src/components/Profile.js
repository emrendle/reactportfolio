import React from "react";
import Skills from "./Skills";

function Profile() {
  return (
    <div className="columns has-same-height">
      <div className="column">
        <div className="card profile">
          <div className="card-content">
            <h3 className="title is-4">Profile</h3>

            <div className="content">
              <table className="table-profile">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>Location:</td>
                  <td>Chicago, IL</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>(312) 720-2563</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>emilyrendleman@gmail.com</td>
                </tr>
              </table>
            </div>
            <br />
            <div className="buttons has-addons is-centered">
              <a
                href="https://github.com/emrendle"
                className="button is-dark"
                target
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/emily-rendleman/"
                className="button is-dark"
                target
              >
                LinkedIn
              </a>
              <a
                href="mailto:emilyrendleman@gmail.com"
                className="button is-dark"
                target
              >
                Contact
              </a>
              <a
                href="assets/files/Rendleman_2021Resume.pdf"
                className="button is-dark"
                target
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card custom-img-box">
          <figure className="image">
            <img
              src="./public/assets/images/DSC02057.png"
              alt="Emily's headshot"
              className="has-ratio"
            />
          </figure>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default Profile;
