import React, { useState } from "react";
import { BlueButton } from "../buttons";
import { addEvent } from "../../api/";
import { useNavigate } from "react-router-dom";
import { Layout } from '../';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import './custom_css/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { formatDateTime } from "../../utils/formatDate";

export default function AddEvent({ setShowAddEventForm, user }) {
  const [addEventBody, setAddEventBody] = useState({});
  const [error, setError] = useState();
  const [date, onChange] = useState(new Date());
  const navigate = useNavigate();

  
  if (error)
    return (
      <div>
        <h1>OOPS!</h1>
      </div>
    );

  const handleBackClick = () => {
    setShowAddEventForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEventBody['date'] = formatDateTime(date)
    addEvent(addEventBody)
      .then((response) => 
      {
        navigate(`/event/${response.id}`);

      })
      .catch((error) => setError(error.message));
  };

  const handleChange = (event) => {
    addEventBody[event.target.name] = event.target.value;
    setAddEventBody(addEventBody);
  };

  return (
    <Layout user={user}>
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
                      <label className="col-sm-3 col-form-label">
                        Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Description
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="description"
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Date of the event
                      </label>
                      <div className="col-sm-9">
                        <DateTimePicker 
                          onChange={onChange}
                          value={date}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Location
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="location"
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-icon-text"
                >
                  <i className="mdi mdi-file-check btn-icon-prepend"></i>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
