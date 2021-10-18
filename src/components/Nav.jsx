import React from "react";
// import {useState} from "react"
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
import Lga from "./Lga";
function Nav() {
  //  const [FirstName, setFirstName] = useState("");

  return (
    <nav>
      <div className="nav-image">
        <img src="/image/apc.jpeg" alt="" />
      </div>

      <div className="nav-link">
        <NavLink
          className="the"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Online Application
        </NavLink>
        {/* <button
          type="button"
          class="btn  the"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Online Application
        </button> */}

        <div
          class="modal fade popp "
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg container">
            <div class="modal-content ">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">
                  Course Registeration Form
                  <h6> Fill out the form carefully for registration</h6>
                </h3>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form class="row g-3 mt-2">
                  <div class="col-md-12">
                    <label for="inputLastName" class="form-label">
                      Membership Reg No
                    </label>
                    <input type="text" class="form-control" required />
                  </div>

                  <div class="col-md-4">
                    <label for="inputLastName" class="form-label">
                      Last Name
                    </label>
                    <input type="text" class="form-control" required />
                  </div>
                  <div class="col-md-4">
                    <label for="FirstName" class="form-label" id="FirstName">
                      FirstName
                    </label>
                    <input type="text" class="form-control" required />
                  </div>
                  <div class="col-md-4">
                    <label for="inputMiddleName" class="form-label">
                      Middle Name
                    </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-md-"></div>

                  <div class="col-md-4">
                    <label for="dob" class="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      id=""
                      class="form-control"
                      placeholder="dateof birth"
                      required
                    />
                  </div>

                  <div class="col-md-3">
                    <label for="inputState" class="form-label">
                      Gender
                    </label>
                    <select id="inputState" class="form-select">
                      <option disabled selected>
                        --Select--
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                 

                  <div class="col-md-4">
                    <label for="inputState" class="form-label">
                      Education
                    </label>
                    <select id="inputState" class="form-select">
                      <option disabled selected>
                        --Select--
                      </option>
                      <option>O-level</option>
                      <option>Undergraduate</option>
                      <option>Bachelors Degree</option>
                      <option>OND/HND</option>
                      <option>Masters Degree</option>
                      <option>Others</option>
                    </select>
                  </div>

                  <div class="col-6">
                    <label htmlFor="inputemail" className="formlabel">
                      Email
                    </label>
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="abcd@example.com"
                      required
                    />
                  </div>

                  <div class="col-6">
                    <label
                      htmlFor="inputphone"
                      className="formlabel"
                      aria-required
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-6">
                    <label for="inputlga" class="form-label">
                      Nationality
                    </label>
                    <input type="text" class="form-control" id="inputlga" />
                  </div>

                  <div class="col-6">
                    <label htmlFor="inputstate" className="formlabel">
                      State of origin
                    </label>

                    <Lga />
                  </div>

                  <div class="col-6">
                    <label for="inputlga" class="form-label">
                      LGA of origin
                    </label>
                    <input type="text" class="form-control" id="inputlga" />
                  </div>

                  <div class="col-6">
                    <label for="inputlga" class="form-label">
                      Ward
                    </label>
                    <input type="text" class="form-control" id="inputlga" />
                  </div>

                  <div class="col-9">
                    <label for="inputAddress" class="form-label">
                      Address
                    </label>

                    <textarea
                      name="adrss"
                      id=""
                      cols="50"
                      rows="5"
                      class="form-control"
                    ></textarea>
                  </div>

                  <div class="col-md-6">
                    <label for="inputState" class="form-label">
                      Course
                    </label>
                    <select id="inputState" class="form-select" required>
                      <option disabled selected>
                        --Select--
                      </option>
                      <option>Database Administration</option>
                      <option>Software Development</option>
                      <option>Computer Programming</option>
                    </select>
                  </div>

                  <div class="col-12"></div>
                  <div class="col-12 btmove ">
                    <button type="submit" class="btn btn-danger ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                {/* <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
