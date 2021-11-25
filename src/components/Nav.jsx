import React, {useState} from "react";
import axios from "axios"
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
function Nav() {
  const [info, setinfo] = useState({
    membership:"",
    lastName: "",
    firstName:"",
    middleName: "",
    dob: "",
    gender: "",
    education:"",
    email: "",
    phone:"",
    lga:"",
    state: "",
    nationality:"",
    ward: "",
    course: "",
    address:""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = axios.post("http://localhost:5000/apply/user", info)
      .then(response => { alert(response.data)})
      .catch((err)=>{console.log(err)})
    
      }
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
                <form class="row g-3 mt-2"
                autoComplete="on"
                  onSubmit={handleSubmit}>
                  <div class="col-md-12">
                    <label for="inputLastName" class="form-label">
                      Membership Reg No
                    </label>
                    <input type="text" class="form-control" required name="membership" onChange={(e) => { setinfo({...info, membership: e.target.value} )}}   />
                  </div>

                  <div class="col-md-4">
                    <label for="inputLastName" class="form-label">
                      Last Name
                    </label>
                    <input type="text" class="form-control" required onChange={(e) => { setinfo({...info, lastName: e.target.value }) }}/>
                  </div>
                  <div class="col-md-4">
                    <label for="FirstName" class="form-label" id="FirstName">
                      FirstName
                    </label>
                    <input type="text" class="form-control" required onChange={(e) => { setinfo({ ...info, firstName: e.target.value }) }}/>
                  </div>
                  <div class="col-md-4">
                    <label for="inputMiddleName" class="form-label">
                      Middle Name
                    </label>
                    <input type="text" class="form-control" onChange={(e) => { setinfo({...info, middleName: e.target.value }) }} />
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
                      onChange={(e) => { setinfo({ ...info, dob: e.target.value }) }}
                    />
                  </div>

                  <div class="col-md-3">
                    <label for="inputState" class="form-label">
                      Gender
                    </label>
                    <select id="inputState" class="form-select"
                      onChange={(e) => { setinfo({ ...info, gender: e.target.value }) }}
                    >
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
                    <select id="inputState" class="form-select"
                      onChange={(e) => { setinfo({ ...info, education: e.target.value }) }}>
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
                      onChange={(e) => { setinfo({ ...info, email: e.target.value }) }}
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
                      type="number"
                      required
                      onChange={(e) => { setinfo({ ...info, phone: e.target.value }) }}
                    />
                  </div>

                  <div class="col-6">
                    <label for="inputlga" class="form-label">
                      Nationality
                    </label>
                    <input type="text" class="form-control" id="inputlga" name="nationality"
                      onChange={(e) => { setinfo({ ...info, nationality: e.target.value }) }}
                    />
                  </div>

                  <div class="col-6">
                    <label htmlFor="inputstate" className="formlabel">
                      State of origin
                    </label>

                    <select id="inputState" class="form-select"   onChange={(e) => { setinfo({ ...info, state: e.target.value }) }}>
        <option disabled selected>
          --Select State--
        </option>
        <option value="Abia">Abia</option>
        <option value="Adamawa">Adamawa</option>
        <option value="Akwa Ibom">Akwa Ibom</option>
        <option value="Anambra">Anambra</option>
        <option value="Bauchi">Bauchi</option>
        <option value="Bayelsa">Bayelsa</option>
        <option value="Benue">Benue</option>
        <option value="Borno">Borno</option>
        <option value="Cross Rive">Cross River</option>
        <option value="Delta">Delta</option>
        <option value="Ebonyi">Ebonyi</option>
        <option value="Edo">Edo</option>
        <option value="Ekiti">Ekiti</option>
        <option value="Enugu">Enugu</option>
        <option value="FCT">Federal Capital Territory</option>
        <option value="Gombe">Gombe</option>
        <option value="Imo">Imo</option>
        <option value="Jigawa">Jigawa</option>
        <option value="Kaduna">Kaduna</option>
        <option value="Kano">Kano</option>
        <option value="Katsina">Katsina</option>
        <option value="Kebbi">Kebbi</option>
        <option value="Kogi">Kogi</option>
        <option value="Kwara">Kwara</option>
        <option value="Lagos">Lagos</option>
        <option value="Nasarawa">Nasarawa</option>
        <option value="Niger">Niger</option>
        <option value="Ogun">Ogun</option>
        <option value="Ondo">Ondo</option>
        <option value="Osun">Osun</option>
        <option value="Oyo">Oyo</option>
        <option value="Plateau">Plateau</option>
        <option value="Rivers">Rivers</option>
        <option value="Sokoto">Sokoto</option>
        <option value="Taraba">Taraba</option>
        <option value="Yobe">Yobe</option>
        <option value="Zamfara">Zamfara</option>
        <option value="Others">others</option>
      </select>

                  </div>

                  <div class="col-6">
                    <label for="inputlga" class="form-label">
                      LGA of origin
                    </label>
                    <input type="text" class="form-control" id="inputlga"  name="lga" onChange={(e) => { setinfo({ ...info, lga: e.target.value }) }} />
                  </div>

                  <div class="col-6">
                    <label for="inputlga" class="form-label">
                      Ward
                    </label>
                    <input type="text" class="form-control" name="word" id="inputlga" onChange={(e) => { setinfo({ ...info, ward: e.target.value }) }} />
                  </div>

                  <div class="col-9">
                    <label for="inputAddress" class="form-label">
                      Address
                    </label>

                    <textarea
                      id=""
                      cols="50"
                      rows="5"
                      class="form-control"
                      name="address"
                      onChange={(e) => { setinfo({ ...info, address: e.target.value }) }}
                    />
                  </div>

                  <div class="col-md-6">
                    <label for="inputState" class="form-label">
                      Course
                    </label>
                    <select id="inputState" class="form-select" required
                    onChange={(e) => { setinfo({ ...info, course: e.target.value }) }}
                    >
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
