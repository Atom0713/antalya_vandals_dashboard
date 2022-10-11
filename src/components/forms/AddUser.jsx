import React, { useState, useEffect, useContext } from "react";
import { addUser } from "../../api/user";
import { fetchAllRoles } from "../../api/role";
import { BlueButton } from "../buttons";
import { USERROLES } from "../constants";
import AuthContext from '../shared/AuthContext'

export default function AddUser({ setShowUserForm }) {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(user.role.id);
  const [addUserBody, setAddUserBody] = useState({"role_id": user.role.id});
  const [formSubmitted, setFormSubmitted] = useState();
  const [newUserResponse, setNewUserResponse] = useState({});

  // data fetch on page loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [userRoles, setUserRoles] = useState({});

  useEffect(() => {
    fetchAllRoles()
      .then((response) => {
        let roles = response.data["roles"]
        if (user.role.id !== USERROLES.ADMIN){
          roles = roles.filter(function( obj ) {
            return obj.id !== USERROLES.ADMIN;
          });
        }
        setUserRoles(roles);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, [user.role.id]);

  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  const handleBackClick = () => {
    setShowUserForm(false);
  };
  const handleChange = (event) => {
    addUserBody[event.target.name] = event.target.value;
    setAddUserBody(addUserBody);
  };

  const handleSubmit = (event) => {
    console.log(addUserBody)
    event.preventDefault();
    addUser(addUserBody)
      .then((response) => setNewUserResponse(response.data), setFormSubmitted(true))
      .catch((error) => console.log(error.message));
  };

  const toggleFormChange = (event) => {
    setRole(USERROLES[event.target.value]);
    setAddUserBody({"role_id": USERROLES[event.target.value]});
  };

  const addAdminFormElements = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Fist name *</label>
              <div className="col-sm-9">
                <input
                  name="first_name"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Last name *</label>
              <div className="col-sm-9">
                <input
                  name="last_name"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Email *</label>
              <div className="col-sm-9">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Date of Birth *</label>
              <div className="col-sm-9">
                <input
                  name="dob"
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };


  const addPlayerFormElements = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Fist name *</label>
              <div className="col-sm-9">
                <input
                  name="first_name"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Last name *</label>
              <div className="col-sm-9">
                <input
                  name="last_name"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Email *</label>
              <div className="col-sm-9">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Date of Birth *</label>
              <div className="col-sm-9">
                <input
                  name="dob"
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Boy *</label>
              <div className="col-sm-9">
                <input
                  name="height"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Kilo *</label>
              <div className="col-sm-9">
                <input
                  name="weight"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mevki *</label>
              <div className="col-sm-9">
                <input
                  name="position"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const addStaffFormElements = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Fist name *</label>
              <div className="col-sm-9">
                <input
                  name="first_name"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Last name *</label>
              <div className="col-sm-9">
                <input
                  name="last_name"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Email *</label>
              <div className="col-sm-9">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Date of Birth *</label>
              <div className="col-sm-9">
                <input
                  name="dob"
                  className="form-control"
                  placeholder="YYYY/MM/DD"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Position *</label>
              <div className="col-sm-9">
                <input
                  name="position"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const newUSerPage = () => {
    return (
      <div>
        Username: {newUserResponse.username}
      </div>
    );
  };
  return (
    <>
      {formSubmitted && newUserResponse ? (
        newUSerPage()
      ) : (
        <>
          {BlueButton(handleBackClick, "Back")}
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Role</label>
                        {userRoles &&
                          userRoles.map((item) => (
                            <div key={item.id} className="col-sm-3">
                              <div className="form-check">
                                <input
                                  onChange={toggleFormChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  value={item.name.toUpperCase()}
                                  id="flexCheckDefault"
                                  checked={role === item.id}
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  {item.name}
                                </label>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <form className="form-sample" onSubmit={handleSubmit}>
                    <p className="card-description"> Personal info </p>
                    {role === USERROLES.ADMIN && addAdminFormElements()}
                    {role === USERROLES.STAFF && addStaffFormElements()}
                    {role === USERROLES.PLAYER && addPlayerFormElements()}
                    <button
                      type="submit"
                      className="btn btn-primary btn-icon-text"
                    >
                      <i className="mdi mdi-file-check btn-icon-prepend"></i>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
