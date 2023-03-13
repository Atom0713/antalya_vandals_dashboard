import React, { useState, useEffect } from "react";
import { fetchUsersByRole, addEventAttendance } from "../../api/";
import { USERROLES } from "../constants";
import { Layout } from '../';
import { BlueButton } from "../buttons";

function Attandance({setShowAttendanceForm, event_id, user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [playersAttandanceList, setPlayersAttandanceList] = useState([]);
  const [addAttandanceBody, setAddAttandanceBody] = useState({});
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    fetchUsersByRole(USERROLES.PLAYER)
      .then((response) => {
        setPlayersAttandanceList(response);
        setCheckedState(new Array(response.length).fill(true));
        const initAttandance = {};
        response.map(
          (item) =>
            (initAttandance[item.id] = {
              present: true,
              absence_reason: null,
            })
        );
        setAddAttandanceBody({attendance: initAttandance, "event_id": parseInt(event_id)});
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  const handleBackClick = () => {
    setShowAttendanceForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEventAttendance(addAttandanceBody)
      .then((response) =>{
        window.location.reload(false);
    })
      .catch((error) => setError(error.message));
  };

  const handleOnChange = (event, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    if (addAttandanceBody.attendance[event.target.value].present) {
      addAttandanceBody.attendance[event.target.value].present = false;
    } else {
      addAttandanceBody.attendance[event.target.value].present = true;
      addAttandanceBody.attendance[event.target.value].absence_reason = null;
    }
    setAddAttandanceBody(addAttandanceBody);
  };

  const handleAbsenceChange = (event, playerId, index) => {
    addAttandanceBody.attendance[playerId].absence_reason = event.target.value;
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
  return (
    <Layout user={user}>
      {BlueButton(handleBackClick, "Back")}
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit}>
                <h4 className="card-title">Attandance</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          {/* <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                          </div> */}
                        </th>
                        <th> Name </th>
                        <th>Absence reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {playersAttandanceList.map((player, index) => (
                        <tr key={index}>
                          <td>
                            <div className="form-check">
                              <input
                                onChange={(event) => handleOnChange(event, index)}
                                type="checkbox"
                                className="form-check-input"
                                checked={checkedState[index]}
                                value={player.id}
                              />
                            </div>
                          </td>
                          <td>
                            <p>{player.first_name} {player.last_name}</p>
                            {/* <img src="assets/images/faces/face1.jpg" alt="" />
                            <span className="ps-2">{player.name}</span> */}
                          </td>
                          <td>
                            {!checkedState[index] && (
                              <input
                                type="text"
                                className="form-control"
                                onChange={(event) =>
                                  handleAbsenceChange(event, player.id, index)
                                }
                              />
                            )}
                          </td>
                          {/* <td>
                            <div className="badge badge-outline-success">Approved</div>
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default Attandance;
