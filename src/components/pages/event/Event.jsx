import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEvent, fetchEventAttendance } from "../../../api/events";
import { fetchComments } from "../../../api/comment";

import { USERROLES } from "../../constants";
import { fetchUsersByRole } from "../../../api/user";
import { BlueButton } from "../../buttons";
import Attandance from "../../forms/Attandance";
import Comment from "../../forms/Comment";

export default function Event({ userRole, user }) {
  const { id } = useParams();

  // data fetch on page loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [event, setEvent] = useState({});
  const [players, setPlayers] = useState({});
  const [comments, setComments] = useState({});
  const [attendance, setAttendance] = useState({});

  const [showAtandanceForm, setShowAttendanceForm] = useState(false);

  useEffect(() => {
    Promise.all([fetchEvent(id), fetchEventAttendance(id), fetchUsersByRole(USERROLES.Player), fetchComments()])
      .then((response) => {
        setEvent(response[0]);
        setAttendance(response[1]);
        setPlayers(response[2]);
        setComments(response[3]);
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

  if (isLoading)
    return (
      <div className="row">
        <h1>Loading...</h1>
      </div>
    );

  if (showAtandanceForm)
    return ( /* Reload page when Attendance returns here*/
      <>
        <Attandance userRole={userRole} setShowAttendanceForm={setShowAttendanceForm} event_id={id} />
      </>
    );

  return (
    <>
      {BlueButton(handleAddAttendanceClick, "Get attandance")}
      <div className="row">
        <div className="col-md-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{event.name}</h4>
              <h4 className="card-title">Description</h4>
              <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left">
                  <p className="text-muted mb-0">{event.description}</p>
                </div>
              </div>
              <h4 className="card-title">Date</h4>
              <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left">
                  <p className="text-muted mb-0">{event.date}</p>
                </div>
              </div>
              <h4 className="card-title">Attendance</h4>
              <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left"> 
                  <p className="text-muted mb-0">{attendance.attended}/{attendance.expected}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <h4 className="card-title mb-1">Event comments (TODO)</h4>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="preview-list">
                    {comments.map((comment, index) => (
                      <div className={index == comments.length - 1 ? "preview-item" : "preview-item border-bottom"}>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <p className="text mb-0">
                            {comment.comment}
                            </p>
                          </div>
                          <div className="me-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">
                             Author: {comment.author}
                            </p>
                            <p className="text-muted mb-0">Date: {comment.date} </p>
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
      <Comment event_id={id}  user={user}/>
    </>
  );
}
