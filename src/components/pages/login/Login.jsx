import React, { useState } from "react";
import {loginUser} from "../../../api/login";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser({
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem("access_token",  response.access_token);
        navigate("/");
      }).catch((error) => console.log(error));
  };

  return (
    <div className="login_container">
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">Login</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Username or email *</label>
                      <input
                        type="text"
                        className="form-control p_input"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password *</label>
                      <input
                        type="text"
                        className="form-control p_input"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {/* <div className="form-group d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />{" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <a href="#" className="forgot-pass">
                        Forgot password
                      </a>
                    </div> */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block enter-btn"
                      >
                        Login
                      </button>
                    </div>
                    {/* <div className="d-flex">
                      <button className="btn btn-facebook me-2 col">
                        <i className="mdi mdi-facebook"></i> Facebook{" "}
                      </button>
                      <button className="btn btn-google col">
                        <i className="mdi mdi-google-plus"></i> Google plus{" "}
                      </button>
                    </div> */}
                    {/* <p className="sign-up">
                      Don't have an Account?<a href="#"> Sign Up</a>
                    </p> */}
                  </form>
                </div>
              </div>
            </div>
            {/*<!-- content-wrapper ends -->*/}
          </div>
          {/*<!-- row ends -->*/}
        </div>
        {/*<!-- page-body-wrapper ends -->*/}
      </div>
      {/*<!-- container-scroller -->*/}
    </div>
  );
}
