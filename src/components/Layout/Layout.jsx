import React, { useState, useEffect} from 'react';
import NavSideBar from '../nav/navSideBar';
import NavBar from '../nav/navBar';
import { fetchUser } from '../../api/user';
import { fetcUserRole } from '../../api/role'
import Footer from '../footer/footer';


const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [user, setUser] = useState({});
    const [userRole, setUserRole ] = useState({});
  
    useEffect(() => {

        {/*
            1. Load user: Done
            2. Load roles Done
        */}
        async function fetchData() {
            const res = await Promise.all([fetchUser(), fetcUserRole()]).catch(error => setError(error.message));
            setUser(res[0])
            setUserRole(res[1])
        }

        fetchData()
        setIsLoading(false)
    }, []
    )
  
    if (error) return (
      <div>
         <h1>{error}</h1>
      </div>
    )
  
  
    if (isLoading) return (
      <div>
         <h1>Loading...</h1>
      </div>
    )


    function addPropsToReactElement(element, props) {
        if (React.isValidElement(element)) {
          return React.cloneElement(element, props)
        }

        return element
      }
      
    function addPropsToChildren(children, props) {
    if (!Array.isArray(children)) {
        return addPropsToReactElement(children, props)
    }
    return children.map(childElement =>
        addPropsToReactElement(childElement, props)
    )
    }

    return(
        <div className="container-scroller">   
            <NavSideBar userName={user.name} userRole={userRole.role}/>
            <div className="container-fluid page-body-wrapper">
                <NavBar userName={user.name}/>
                <div className="main-panel">
                    <main>{addPropsToChildren(children, { userRole })}</main>  {/*<!-- can't pass role to children --> */}
                    <Footer />
                </div>
            </div>
        </div>
        /*<!-- container-scroller --> */
    )
}

export default Layout;