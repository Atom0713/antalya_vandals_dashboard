import React, { useState, useEffect } from 'react';
import AddUser from './AddUser';
import { fetchUsersByRole } from '../../../api/user';
import { OrderedDarkWithImageTable } from '../../tables';
import { USERROLES } from '../../constants';

export default function User({userRole}) {
  // show add user form toggle
  const [showUserForm, setShowUserForm] = useState(false);
  const [role, setRole ] = useState("admin")

  // data fetch on page loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [state, setState] = useState({});
    
  useEffect(() => {
    Promise.all([
      fetchUsersByRole(USERROLES['staff']), 
      fetchUsersByRole(USERROLES['player'])
    ])
    .then(response =>
      setState({
        "staff": response[0] ,
        "players": response[1] 
      }),
      console.log(state),
      setIsLoading(false)
    )
    .catch(error => setError(error.message));

    {/*
        1. Load user: Done
        2. accept permissions from parent component
    */}
  }, [])

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
      {role === "admin" ? 
      <div className="page-header">
        <button onClick={handleAddUserClick} type="button" className="btn btn-primary btn-fw">Add user</button>
      </div> : null
      }
      {state.staff && <OrderedDarkWithImageTable
        title={'Coaching staff'}
        headers={['', 'Name', 'Positions', 'Date of birth']}
        order={['img', 'name', 'positions', 'birth_date']}
        data={state.staff}/>
      }
      {state.players && <OrderedDarkWithImageTable
        title={'Players'} 
        headers={['', 'Name', 'Position', 'Date of birth', 'Height', 'Weight']}
        order={['img', 'name', 'position', 'birth_date', 'height', 'weight']}
        data={state.players}
        />}
    </div>
  )
}
