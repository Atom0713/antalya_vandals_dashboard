import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from '../../api';
import { USERROLES } from '../constants';
import { Layout } from '../';

export default function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState({})
    const [error, setError] = useState({})

    useEffect(() => {
        setIsLoading(true);
        fetchUserById(id)
        .then((response) => {
            setUser(response);
          setIsLoading(false);
        })
        .catch((error) => setError(error.message));
      }, []);

    if (isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }

    const PlayerDetails = (
        <>
            <h4 className="card-title">Height</h4>
            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left">
                    <p className="text-muted mb-0">{user.height}</p>
                </div>
            </div>
            <h4 className="card-title">Weight</h4>
            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                <div className="text-md-center text-xl-left">
                    <p className="text-muted mb-0">{user.weight}</p>
                </div>
            </div>
        </>
    )


    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Name</h4>
                            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                <div className="text-md-center text-xl-left">
                                <p className="text-muted mb-0">{user.first_name} {user.last_name}</p>
                                </div>
                            </div>
                            <h4 className="card-title">Role</h4>
                            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                <div className="text-md-center text-xl-left">
                                    <p className="text-muted mb-0 text-capitalize">{user.role.name}</p>
                                </div>
                            </div>
                            <h4 className="card-title">Date of birth</h4>
                            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                <div className="text-md-center text-xl-left">
                                    <p className="text-muted mb-0">{user.dob}</p>
                                </div>
                            </div>
                            {[USERROLES.STAFF, USERROLES.PLAYER].includes(user.role.id) && (
                                <>
                                    <h4 className="card-title">Position</h4>
                                    <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                        <div className="text-md-center text-xl-left">
                                            <p className="text-muted mb-0">{user.position}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {
                                user.role.id === USERROLES.PLAYER && PlayerDetails
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
