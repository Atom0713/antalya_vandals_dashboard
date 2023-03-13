import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from '../../api';
import { USERROLES } from '../constants';
import { Layout } from '../';
import { Spinner } from "../spinner";

export default function Profile() {
    const { id } = useParams();
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({})

    useEffect(() => {
        fetchUserById(id)
        .then((response) => {
            setState({user: response});
            setIsLoading(false);
        })
        .catch((error) => setError(error.message));
      }, []);


    const PlayerDetails = (
        isLoading ? <></> :
        <>
            <h4 className="card-title">Height</h4>
            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left">
                    <p className="text-muted mb-0">{state.user.height}</p>
                </div>
            </div>
            <h4 className="card-title">Weight</h4>
            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left">
                    <p className="text-muted mb-0">{state.user.weight}</p>
                </div>
            </div>
        </>
    )


    return (
        isLoading ? <Spinner /> :
        <Layout user={state.user}>
            <div className="row">
                <div className="col-md-4 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Name</h4>
                            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                <div className="text-md-center text-xl-left">
                                <p className="text-muted mb-0">{state.user.first_name} {state.user.last_name}</p>
                                </div>
                            </div>
                            <h4 className="card-title">Role</h4>
                            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                <div className="text-md-center text-xl-left">
                                    <p className="text-muted mb-0 text-capitalize">{state.user.role.name}</p>
                                </div>
                            </div>
                            <h4 className="card-title">Date of birth</h4>
                            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                <div className="text-md-center text-xl-left">
                                    <p className="text-muted mb-0">{state.user.dob}</p>
                                </div>
                            </div>
                            {[USERROLES.STAFF, USERROLES.PLAYER].includes(state.user.role.id) && (
                                <>
                                    <h4 className="card-title">Position</h4>
                                    <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                        <div className="text-md-center text-xl-left">
                                            <p className="text-muted mb-0">{state.user.position}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {
                                state.user.role.id === USERROLES.PLAYER && PlayerDetails
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
