import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEvent } from "../../../api/events";

import { USERROLES } from "../../constants";
import { fetchUsersByRole } from "../../../api/user";
import { BlueButton } from "../../buttons";
import Attandance from "../../forms/Attandance";

export default function Event({ userRole }) {
  const { id } = useParams();

  // data fetch on page loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [event, setEvent] = useState({});
  const [players, setPlayers] = useState({});

  const [showAddAtandanceForm, setAddAtandanceForm] = useState(false);

  useEffect(() => {
    Promise.all([fetchEvent(id), fetchUsersByRole(USERROLES.Player)])
      .then((response) => {
        setEvent(response[0]);
        setPlayers(response[1]);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  const handleClick = () => {
    setAddAtandanceForm(true);
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

  if (showAddAtandanceForm)
    return (
      <>
        <Attandance userRole={userRole} />
      </>
    );

  return (
    <>
      {BlueButton(handleClick, "Get attandance")}
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
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-primary">
                          <i className="mdi mdi-file-document"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">
                            Admin dashboard design
                          </h6>
                          <p className="text-muted mb-0">
                            Broadcast web app mockup ghbjnlkjdslvsjxfkgsdf
                          </p>
                        </div>
                        <div className="me-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">
                            15 minutes ago ghdsfsdjghsdg
                          </p>
                          <p className="text-muted mb-0">30 tasks, 5 issues </p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                          <i className="mdi mdi-cloud-download"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">
                            Wordpress Development
                          </h6>
                          <p className="text-muted mb-0">Upload new design</p>
                        </div>
                        <div className="me-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">1 hour ago</p>
                          <p className="text-muted mb-0">23 tasks, 5 issues </p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                          <i className="mdi mdi-clock"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Project meeting</h6>
                          <p className="text-muted mb-0">
                            New project discussion
                          </p>
                        </div>
                        <div className="me-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">35 minutes ago</p>
                          <p className="text-muted mb-0">15 tasks, 2 issues</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-danger">
                          <i className="mdi mdi-email-open"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Broadcast Mail</h6>
                          <p className="text-muted mb-0">
                            Sent release details to team
                          </p>
                        </div>
                        <div className="me-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">55 minutes ago</p>
                          <p className="text-muted mb-0">35 tasks, 7 issues </p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                          <i className="mdi mdi-chart-pie"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">UI Design</h6>
                          <p className="text-muted mb-0">
                            New application planning
                          </p>
                        </div>
                        <div className="me-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">50 minutes ago</p>
                          <p className="text-muted mb-0">27 tasks, 4 issues </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
