import React, {useState} from 'react';

export default function AddUser({setShowUserForm}) {

    const [selectedRoleOption, setRoleOption] = useState("player");

    const handleBackClick = () => {
        setShowUserForm(false);
    }

    const handleSubmit = (event) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    const onValueChange = (event) => {
        setRoleOption(event.target.value);
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
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Role</label>
                                <div className="col-sm-4">
                                    <div className="form-check">
                                        <input onChange={onValueChange} className="form-check-input" type="checkbox" value="staff" id="flexCheckDefault" checked={selectedRoleOption === "staff"}/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Staff
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-check">
                                        <input onChange={onValueChange} className="form-check-input" type="checkbox" value="player" id="flexCheckDefault" checked={selectedRoleOption === "player"}/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Player
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="form-sample" onSubmit={handleSubmit}>
                        <p className="card-description"> Personal info </p>
                        {selectedRoleOption === "player" ? 
                        addPlayerFormElements():
                        addStaffFormElements()
                        }
                        {/* <div className="row">
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
                        </div> */}
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
