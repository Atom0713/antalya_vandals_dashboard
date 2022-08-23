import React, {useState} from 'react';
import { BlueButton } from '../buttons';

export default function AddEvent({setShowAddEventForm}) {
    const [addEventBody, setAddEventBody] = useState({})
    const handleBackClick = () => {
        setShowAddEventForm(false);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      // addEvent(addEventBody)
      // .then(response => 
      //     setNewUserResponse(response),
      //     setFormSubmitted(true)
      // )
      // .catch(error => setError(error.message))
    }

    const handleChange = (event) => {
      addEventBody[event.target.name] = event.target.value
      setAddEventBody(addEventBody)
    }

  return (
    <>
        {BlueButton(handleBackClick, "Back")}
        <div className="row">
          <div className="col-12 grid-margin">
              <div className="card">
                  <div className="card-body">
                  <form className="form-sample" onSubmit={handleSubmit}>
                      <p className="card-description"> Add event </p>
                      <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-9">
                                    <input name="name" type="text" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Description</label>
                            <div className="col-sm-9">
                                <input name="description" type="text" className="form-control" onChange={handleChange} />
                            </div>
                            </div>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group row">
                                  <label className="col-sm-3 col-form-label">Date of the event</label>
                                  <div className="col-sm-9">
                                      <input name="birth_date" className="form-control" placeholder="dd/mm/yyyy" onChange={handleChange} />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button type="submit" className="btn btn-primary btn-icon-text">
                          <i className="mdi mdi-file-check btn-icon-prepend"></i> 
                          Submit 
                      </button>
                  </form>
                  </div>
              </div>
          </div>
      </div>   
    </>
  )
}
