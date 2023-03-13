import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEvent, fetchEventComments, fetchEventAttendance, fetchUser } from "../../api/";
import { BlueButton } from "../buttons";
import { Attandance, Comment } from "../forms";
import { Layout } from '../';

import { AttendanceOrderedDarkWithImageTable } from "../tables";
import { Spinner } from "../spinner";

import AphexChart from '../charts/pieChart';

export default function Event() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [state, setState] = useState({});


  const [showAtandanceForm, setShowAttendanceForm] = useState(false);
  const [onCommentSubmit, setOnCommentSubmit] = useState(false);

  useEffect(() => {
    Promise.all([
      fetchUser(),
      fetchEvent(id),
      fetchEventComments(id),
      fetchEventAttendance(id),
    ])
    .then((response) => {
      setState({
        user: response[0],
        event: response[1],
        comments: response[2],
        attendance: response[3] 
      })
      
      setIsLoading(false);
    })
    .catch((error) => setError(error.message));
  }, []);

  const handleAddAttendanceClick = () => {
    setShowAttendanceForm(true);
  };

  if (error)
    return (
      <div className="row">
        <h1>{error}</h1>
      </div>
    );

  if (showAtandanceForm)
    return ( /* Reload page when Attendance returns here*/
      <Attandance setShowAttendanceForm={setShowAttendanceForm} event_id={id} user={state.user} />
    );

  return (
    isLoading ? <Spinner /> :
    <Layout user={state.user}>
      {!state.event.completed && BlueButton(handleAddAttendanceClick, "Get attandance")}
      <div className="row">
        <div className="col-md-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-md-center text-muted">{state.event.name}</h4>
              <h4 className="card-title">Description</h4>
              <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left">
                  <p className="text-muted text-break mb-0">{state.event.description}</p>
                </div>
              </div>
              <h4 className="card-title">Date</h4>
              <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left">
                  <p className="text-muted mb-0">{state.event.date}</p>
                </div>
              </div>
              {state.event.completed && 
              <>
                <h4 className="card-title">Attendance</h4>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <AphexChart attendance={state.attendance}/>
                </div>
              </>}
            </div>
          </div>
        </div>
        <div className="col-md-8 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <h4 className="card-title mb-1">Event comments</h4>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="preview-list">
                    {state.comments.map((comment, index) => (
                      <div key={index} className={index === state.comments.length - 1 ? "preview-item" : "preview-item border-bottom"}>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow text-xl-left">
                            <p className="text-break mb-0">
                            {comment.comment}
                            </p>
                          </div>
                          <div className="me-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">
                             Author: {comment.author}
                            </p>
                            <p className="text-muted mb-0">Date: {comment.created_at} </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comment setOnCommentSubmit={setOnCommentSubmit} event_id={id} user={state.user}/>
      {state.event.completed &&
        <AttendanceOrderedDarkWithImageTable
          title={"Attendance"}
          headers={["Name", "Present", "Absence comment"]}
          data={state.attendance}
          link={true}
          url={"/me"}
          user_id_field={"user_id"}
        />
      }
    </Layout>
  );
}
