import React, { useState, useEffect } from "react";
import { Layout } from '../';
import { USERROLES } from "../constants";
import { fetchUsersByRole, fetchUser } from "../../api/";

export default function DepthChart() {
    const [state, setState] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        Promise.all([
            fetchUser(),
            fetchUsersByRole(USERROLES.PLAYER),
        ])
        .then((response) => {
            setState({
                user: response[0],
                players: response[1],
            });
            setIsLoading(false);
        })
        .catch((error) => setError(error.message));
    }, []);

    if (isLoading)
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );

  return (
    <Layout user={state.user}>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                <h4 className="card-title">Depth chart</h4>
                {/* <p className="card-description"> Add className <code>.table-bordered</code>
                </p> */}
                <div className="table-responsive">
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th> # </th>
                        <th> Position </th>
                        <th> Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.players && state.players.map((item, index) => (
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td> {item.position} </td>
                            <td> {item.first_name} {item.last_name} </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}