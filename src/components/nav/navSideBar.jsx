import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { USERROLES } from "../constants";
import { fetchUser } from '../../api'

export default function NavSideBar() {
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser()
    .then((response) => {
        setState({user: response});
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  if (isLoading)
    return (
      <div>
      </div>
    );

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      {/* <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <Link className="sidebar-brand brand-logo" to="/">
          <img src="assets/images/logo.svg" alt="logo" />
        </Link>
        <Link className="sidebar-brand brand-logo-mini" to="/">
          <img src="assets/images/logo-mini.svg" alt="logo" />
        </Link>
      </div> */}
      <ul className="nav">
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              {/* <div className="count-indicator">
                <img
                  className="img-xs rounded-circle "
                  src="assets/images/faces/face15.jpg"
                  alt=""
                />
                <span className="count bg-success"></span>
              </div> */}
              <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">{state.user.first_name} {state.user.last_name}</h5>
                <span className="text-capitalize">{state.user.role.name}</span>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item menu-items">
          <Link className="nav-link" to="/">
            <span className="menu-icon">
              <i className="mdi mdi-view-dashboard"></i>
            </span>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        {[USERROLES.ADMIN, USERROLES.STAFF, USERROLES.PLAYER].includes(state.user.role.id) && (
          <li className="nav-item menu-items">
            <Link className="nav-link" to={`/me/${state.user.id}`}>
              <span className="menu-icon">
                <i className="mdi mdi-account-multiple-outline"></i>
              </span>
              <span className="menu-title">My Profile</span>
            </Link>
          </li>
        )}
        {[USERROLES.ADMIN, USERROLES.STAFF].includes(state.user.role.id) && (
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/users">
              <span className="menu-icon">
                <i className="mdi mdi-account-multiple-outline"></i>
              </span>
              <span className="menu-title">Users</span>
            </Link>
          </li>
        )}
        {[USERROLES.ADMIN, USERROLES.STAFF, USERROLES.PLAYER].includes(state.user.role.id) && (
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/events">
              <span className="menu-icon">
                <i className="mdi mdi-view-dashboard"></i>
              </span>
              <span className="menu-title">Events</span>
            </Link>
          </li>
        )}
        {[USERROLES.ADMIN, USERROLES.STAFF, USERROLES.PLAYER].includes(state.user.role.id) && (
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/depth_chart">
              <span className="menu-icon">
                <i className="mdi mdi-view-dashboard"></i>
              </span>
              <span className="menu-title">Depth chart</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
