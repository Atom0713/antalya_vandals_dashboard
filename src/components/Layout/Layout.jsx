import React, { useState, useEffect} from 'react';
import NavSideBar from '../nav/navSideBar';
import NavBar from '../nav/navBar';
import { fetchUser } from '../../api/user';
import Footer from '../footer/footer';


const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState({});
  
    useEffect(() => {

        {/*
            1. Load user: Done
            2. Load permissions
        */}
        async function fetchData() {
            const res = await Promise.all([fetchUser()]).catch(error => setError(error.message));
            setData(res[0])
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
    return(
        <div className="container-scroller">   
            <NavSideBar userName={data.name}/>
            <div className="container-fluid page-body-wrapper">
                <NavBar userName={data.name}/>
                <div className="main-panel">
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
        </div>
        /*<!-- container-scroller --> */
    )
}

export default Layout;