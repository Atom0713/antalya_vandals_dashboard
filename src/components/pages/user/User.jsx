import React, { useState, useEffect } from 'react';
import AddUser from './AddUser';
import { fetchAllUsers } from '../../../api/user';

export default function User() {
  const [showUserForm, setShowUserForm] = useState(false);



  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState(
    {
      staff: [],
      players: [] 
    });
  useEffect(() => {

    {/*
        1. Load user: Done
        2. Load permissions
    */}
    async function fetchData() {
        const res = await Promise.all([fetchAllUsers()]).catch(error => setError(error.message));
        setData(res[0])
    }

    fetchData()
    setIsLoading(false)
}, []
)

  const handleAddUserClick = () => {
    setShowUserForm(true);
  }

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

  if (showUserForm) return (
    <AddUser setShowUserForm={setShowUserForm}/>
  )

  return (
    <div className="content-wrapper">
        <div className="page-header">
          <button onClick={handleAddUserClick} type="button" className="btn btn-primary btn-fw">Add user</button>
        </div>
        <div className="row ">
            <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Coaching staff</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th> Name </th>
                            <th> Positions </th>
                            <th> Date of birth</th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.staff.map((item) =>
                          <tr>
                            <td>
                              <img src="assets/images/faces/face1.jpg" alt="image" />
                              <span className="ps-2">{item.name}</span>
                            </td>
                            <td> {item.positions} </td>
                            <td> {item.birth_date} </td>
                            {/* <td> {item.height} </td>
                            <td> {item.weight} </td> */}
                            {/* <td> will be practice attendance
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
        <div className="row ">
            <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Players</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th> Name </th>
                            <th> Position </th>
                            <th> Date of birt Cost </th>
                            <th> Height </th>
                            <th> Weight </th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.players.map((item) =>
                          <tr>
                            <td>
                              <img src="assets/images/faces/face1.jpg" alt="image" />
                              <span className="ps-2">{item.name}</span>
                            </td>
                            <td> {item.position} </td>
                            <td> {item.birth_date} </td>
                            <td> {item.height} </td>
                            <td> {item.weight} </td>
                            {/* <td> will be practice attendance
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
    </div>
  )
}
