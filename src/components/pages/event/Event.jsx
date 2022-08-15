import React, { useState, useEffect } from 'react';
import {  useParams} from "react-router-dom";
import {fetchEvent} from '../../../api/events';
import { OrderedDarkWithImageTable } from '../../tables';

import { USERROLES } from '../../constants';
import { fetchUsersByRole } from '../../../api/user';

export default function Event() {
  const { id } = useParams();
  
  // data fetch on page loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [event, setEvent] = useState({});
  const [players, setPlayers] = useState({});

  useEffect(() => {
    Promise.all([
      fetchEvent(id),
      fetchUsersByRole(USERROLES['player'])
    ])
    .then(response =>
        {
          setEvent(response[0])
          setPlayers(response[1])
          setIsLoading(false)
        }
    )
    .catch(error => setError(error.message));
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
   
  return (
    <>
      <div className="row ">
          <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                      <tr>
                      <th> Name </th>
                      <th> Date </th>
                      <th> Description </th>
                      </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>
                              {event.name}
                            </td>
                            <td>
                              {event.date}
                            </td>
                            <td>
                              {event.description}
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          </div>
      </div>
      {/*make it a form to send attendance*/}
        {players && <OrderedDarkWithImageTable
          title={'Attendance'} 
          headers={['Name', 'Position', 'Date of birth', 'Height', 'Weight']}
          order={['img', 'position', 'birth_date', 'height', 'weight']}
          data={players}
        />}
    </>
  )
}
