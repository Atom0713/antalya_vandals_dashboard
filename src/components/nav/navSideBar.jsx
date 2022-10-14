import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { USERROLES } from "../constants";
import AuthContext from '../shared/AuthContext'

export default function NavSideBar() {
  const {user} = useContext(AuthContext);
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
                <h5 className="mb-0 font-weight-normal">{user.first_name} {user.last_name}</h5>
                <span className="text-capitalize">{user.role.name}</span>
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
        {[USERROLES.ADMIN, USERROLES.STAFF, USERROLES.PLAYER].includes(user.role.id) && (
          <li className="nav-item menu-items">
            <Link className="nav-link" to={`/me/${user.id}`}>
              <span className="menu-icon">
                <i className="mdi mdi-account-multiple-outline"></i>
              </span>
              <span className="menu-title">My Profile</span>
            </Link>
          </li>
        )}
        {[USERROLES.ADMIN, USERROLES.STAFF].includes(user.role.id) && (
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/users">
              <span className="menu-icon">
                <i className="mdi mdi-account-multiple-outline"></i>
              </span>
              <span className="menu-title">Users</span>
            </Link>
          </li>
        )}
        {[USERROLES.ADMIN, USERROLES.STAFF, USERROLES.PLAYER].includes(user.role.id) && (
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/events">
              <span className="menu-icon">
                <i className="mdi mdi-view-dashboard"></i>
              </span>
              <span className="menu-title">Events</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
