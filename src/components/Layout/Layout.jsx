import React, { useContext, useEffect, useState } from "react";
import NavSideBar from "../nav/navSideBar";
import NavBar from "../nav/navBar";
import Footer from "../footer/footer";
import { fetchUser } from '../../api/user';
import AuthContext from '../shared/AuthContext'

const Layout = ({ children }) => {
  const { setUser} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchUser()
    .then((response) => {
      setUser(response)
      setIsLoading(false);
    })
    .catch((error) => setError(error.message))
  }, []);

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
