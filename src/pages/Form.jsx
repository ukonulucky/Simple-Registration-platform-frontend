import React from "react";

const Form = () => {
 
    return (
      <div className="container">
        <div>


{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

          <h1>Course Registeration Form</h1>
          <h4>Fill out the form carefully for registration</h4>
        </div>
        <div>
          <form method ="post" action="/post/reg" class="row g-3 mt-5">
            <div class="col-md-3">
              <label for="inputLastName" class="form-label">
                Last Name
              </label>
              <input type="text" class="form-control" name="lastName" />
            </div>
            <div class="col-md-3">
              <label for="inputFirstName" class="form-label">
                First Name
              </label>
              <input type="text" class="form-control" name="firstName"/>
            </div>
            <div class="col-md-3">
              <label for="inputMiddleName" class="form-label">
                Middle Name
              </label>
              <input type="text" class="form-control" name="middleName" />
            </div>
            <div class="col-md-3"></div>

            <div class="col-md-3">
              <label for="dob" class="form-label">
                Date of Birth
              </label>
              <input type="date" name="dob" id="" class="form-control" placeholder="date of birth" name="dateOfBirth"/>
            </div>

            <div class="col-md-3">
              <label for="gender" class="form-label">
                Gender
              </label>
              <select id="gender" class="form-select" name="gender">
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div class="col-md-3">
              <label for="education1" class="form-label">
                Select Education
              </label>
              <select id="education1" class="form-select" name="education">
                <option selected>Choose...</option>
                <option>O-level</option>
                <option>Undergraduate</option>
                <option>Bachelors Degree</option>
                <option>OND/HND</option>
                <option>Masters Degree</option>
                <option>Others</option>
              </select>
            </div>

            <div class="col-9">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                name="address1"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                name="address2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" name="city" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select" input="state">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" name="zip"/>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="bolean"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>

        
      </div>
    );
};
export default Form

