import React, { useState, useEffect, useRef } from 'react'
import { fetchUsersByRole } from '../../api/user';
import { USERROLES } from '../constants';

function Attandance({userRole}) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [playersAttandanceList, setPlayersAttandanceList] = useState([])
    const [addAttandanceBody, setAddAttandanceBody] = useState({})
    const [checkedState, setCheckedState] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetchUsersByRole(USERROLES['Player'])
        .then(response =>
            {
                setPlayersAttandanceList(response)
                setIsLoading(false)
                setCheckedState(
                  new Array(response.length).fill(true)
                )
                const initAttandance = {};
                response.map((item) => 
                  initAttandance[item.id] =
                    {
                      "present": true,
                      "absence_comment": null
                    }
                )
                setAddAttandanceBody({"player_ids": initAttandance})
            }
        )
        .catch(error => setError(error.message));
      }, [])

    const handleOnChange = (event, position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );

      setCheckedState(updatedCheckedState);
      if (addAttandanceBody.player_ids[event.target.value].present){
        addAttandanceBody.player_ids[event.target.value].present = false
      } else {
        addAttandanceBody.player_ids[event.target.value].present = true 
        addAttandanceBody.player_ids[event.target.value].absence_comment = null
      } 
      setAddAttandanceBody(addAttandanceBody)
    }

    const handleAbsenceChange = (event, playerId, index) => {
      addAttandanceBody.player_ids[playerId].absence_comment = event.target.value;
    }

    if (error) return (
        <div className="row">
            <h1>{error}</h1>
        </div>
    )

    if (isLoading) return (
        <div className="row">
            <h1>Loading...</h1>
        </div>
    )
  return (
    <>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Attandance</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                          </div>
                        </th>
                        <th> Name </th>
                        <th>Absence reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {playersAttandanceList.map((player, index) => 
                        <tr key={index}>
                        <td>
                          <div className="form-check">
                              <input onChange={event => handleOnChange(event, index)} type="checkbox" className="form-check-input" checked={checkedState[index]} value={player.id}/>
                          </div>
                        </td>
                        <td>
                          <img src="assets/images/faces/face1.jpg" alt="" />
                          <span className="ps-2">{player.name}</span>
                        </td>
                        <td>
                          {!checkedState[index] && 
                            <input name="name" type="text" className="form-control" onChange={event => handleAbsenceChange(event, player.id, index)}/>
                          }
                        </td>
                        {/* <td>
                          <div className="badge badge-outline-success">Approved</div>
                        </td> */}
                      </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Attandance