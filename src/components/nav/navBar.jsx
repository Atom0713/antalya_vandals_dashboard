import React from "react";
import { logout } from "../auth";
import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav className="navbar p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo-mini" to="/">
          <img src="assets/images/logo-mini.svg" alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <ul className="navbar-nav navbar-nav-right">
          {/* <li className="nav-item nav-settings d-none d-lg-block">
            <a className="nav-link" href="#">
              <i className="mdi mdi-view-grid"></i>
            </a>
          </li> */}
          {/* <li className="nav-item dropdown border-left">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="messageDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="mdi mdi-email"></i>
              <span className="count bg-success"></span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="messageDropdown"
            >
              <h6 className="p-3 mb-0">Messages</h6>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="assets/images/faces/face4.jpg"
                    alt=""
                    className="rounded-circle profile-pic"
                  />
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    Mark send you a message
                  </p>
                  <p className="text-muted mb-0"> 1 Minutes ago </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="assets/images/faces/face2.jpg"
                    alt=""
                    className="rounded-circle profile-pic"
                  />
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    Cregh send you a message
                  </p>
                  <p className="text-muted mb-0"> 15 Minutes ago </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="assets/images/faces/face3.jpg"
                    alt=""
                    className="rounded-circle profile-pic"
                  />
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    Profile picture updated
                  </p>
                  <p className="text-muted mb-0"> 18 Minutes ago </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <p className="p-3 mb-0 text-center">4 new messages</p>
            </div>
          </li> */}
          {/* <li className="nav-item dropdown border-left">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i className="mdi mdi-bell"></i>
              <span className="count bg-danger"></span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <h6 className="p-3 mb-0">Notifications</h6>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-calendar text-success"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Event today</p>
                  <p className="text-muted ellipsis mb-0">
                    {" "}
                    Just a reminder that you have an event today{" "}
                  </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-settings text-danger"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Settings</p>
                  <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-link-variant text-warning"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Launch Admin</p>
                  <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <p className="p-3 mb-0 text-center">See all notifications</p>
            </div>
          </li> */}
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              id="profileDropdown"
              href="#"
              data-bs-toggle="dropdown"
            >
              <div className="navbar-profile">
                {/* <img
                  className="img-xs rounded-circle"
                  src="assets/images/faces/face15.jpg"
                  alt=""
                /> */}
                <p className="mb-0 d-none d-sm-block navbar-profile-name">
                  {user.name}
                </p>
                <i className="mdi mdi-menu-down d-none d-sm-block"></i>
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="profileDropdown"
            >
              {/* <h6 className="p-3 mb-0">Profile</h6> */}
              <div className="dropdown-divider"></div>
              {/* <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-settings text-success"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Settings</p>
                </div>
              </a> */}
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-logout text-danger"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <button
                    className="preview-subject mb-1"
                    onClickCapture={logout}
                  >
                    Log out
                  </button>
                  {/* <p className="preview-subject mb-1">Log out</p> */}
                </div>
              </a>
              <div className="dropdown-divider"></div>
              {/* <p className="p-3 mb-0 text-center">Advanced settings</p> */}
            </div>
          </li>
          <li className="d-lg-none">
            <a
                className="nav-link"
                id="profileDropdown"
                href="#"
                data-bs-toggle="dropdown"
              >
              <i className="mdi mdi-menu"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="profileDropdown">
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content">
                    <div className="preview-item-content">
                      <Link className="d-sm-block navbar-profile-name" to="/">
                        Dashboard
                      </Link>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="preview-item-content">
                      <Link to="/user">
                        Users
                      </Link>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="preview-item-content">
                      <Link to="/events">
                        Events
                      </Link>
                    </div>
                  </div>
                </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
