import React from 'react';
import {Link} from "react-router-dom";

export default function NavSideBar({userName, userRole}) {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <Link className="sidebar-brand brand-logo" to="/"><img src="assets/images/logo.svg" alt="logo" /></Link>
        <Link className="sidebar-brand brand-logo-mini" to="/"><img src="assets/images/logo-mini.svg" alt="logo" /></Link>
      </div>
      <ul className="nav">
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" alt=""/ >
                <span className="count bg-success"></span>
              </div>
              <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">{userName}</h5>
                <span>{userRole}</span>
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
        <li className="nav-item menu-items">
          <Link className="nav-link" to="/user"> 
            <span className="menu-icon">
                <i className="mdi mdi-account-multiple-outline"></i>
            </span>
            <span className="menu-title">User</span>
          </Link>
        </li>
        <li className="nav-item menu-items">
        <Link className="nav-link" to="/attendance">
          <span className="menu-icon">
            <i className="mdi mdi-view-dashboard"></i>
          </span>
          <span className="menu-title">Attendance</span>
        </Link>
        </li>
      </ul>
    </nav>
  )
}
