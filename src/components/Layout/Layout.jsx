import React from "react";
import NavSideBar from "../nav/navSideBar";
import NavBar from "../nav/navBar";
import Footer from "../footer/footer";

const Layout = ({ children }) =>{
  return (
    <div className="container-scroller">
      <NavSideBar/>
      <div className="container-fluid page-body-wrapper">
        <NavBar/>
        <div className="main-panel">
          <main>
            <div className="content-wrapper">{children}</div>
          </main>{" "}
          {/*<!-- can't pass role to children --> */}
          <Footer />
        </div>
      </div>
    </div>
    /*<!-- container-scroller --> */
  );
};

export default Layout;
