import React, {useState, useEffect} from 'react';
import { fetchAllUserRoles } from '../../../api/user';

export default function AddUser({setShowUserForm}) {
    // toggle add form
    const [role, setRole] = useState(1);

    //add user form input values
    // common
    const [firtName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [birthDate, setBirthDate] = useState()

    // staff
    const [positions, setPositions] = useState()

    //player
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [position, setPosition] = useState()
   

    // data fetch on page loading
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();
    const USERROLES = {
        "Admin": 1,
        "Staff": 2,
        "Player": 3
    }

    useEffect(() => {

        {/*
            1. Load user: Done
            2. Load permissions
        */}
        async function fetchData() {
            const res = await Promise.all([fetchAllUserRoles()]).catch(error => setError(error.message));
            setData(res[0])
        }
    
        fetchData()
        setIsLoading(false)
    }, [])

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

    const handleBackClick = () => {
        setShowUserForm(false);
    }

    const handleSubmit = (event) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    const toggleFormChange = (event) => {
        setRole(USERROLES[event.target.value]);
    }


    const addPlayerFormElements = () => {
        return (
        <>
        <div className="row">
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">First Name</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group row">
            <label className="col-sm-3 col-form-label">Last Name</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" />
            </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Date of Birth</label>
                <div className="col-sm-9">
                    <input className="form-control" placeholder="dd/mm/yyyy" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Boy</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Kilo</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mevki</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
    </div>
    </>
    )}

    const addStaffFormElements = () => {

        return (
        <>
                <div className="row">
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">First Name</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group row">
            <label className="col-sm-3 col-form-label">Last Name</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" />
            </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Date of Birth</label>
                <div className="col-sm-9">
                    <input className="form-control" placeholder="dd/mm/yyyy" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Positions</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
    </div>
        </>
    )}


  return (
    <div className="content-wrapper">
        <div className="page-header">
          <button onClick={handleBackClick} type="button" className="btn btn-primary btn-fw">Back</button>
        </div>
        <div className="row">
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Role</label>
                                {data && data["user_roles"].map((item) =>
                                <div key={item.id} className="col-sm-3">
                                    <div className="form-check">
                                        <input onChange={toggleFormChange} className="form-check-input" type="checkbox" value={item.name} id="flexCheckDefault" checked={role === item.id}/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            {item.name}
                                        </label>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <form className="form-sample" onSubmit={handleSubmit}>
                        <p className="card-description"> Personal info </p>
                        {role === USERROLES['Admin'] && addStaffFormElements()}
                        {role === USERROLES['Staff'] && addStaffFormElements()}
                        {role === USERROLES['Player'] && addPlayerFormElements()}
                        <button type="submit" className="btn btn-primary btn-icon-text">
                            <i className="mdi mdi-file-check btn-icon-prepend"></i> 
                            Submit 
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
