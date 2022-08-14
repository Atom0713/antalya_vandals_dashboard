import React, { useState, useEffect } from 'react';
import AddEvent from './AddEvent';
import { fetchEvents } from '../../../api/events';
import { OrderedDarkWithImageTable } from '../../tables'

export default function Event() {
    // TODO: 
    // 1. Fetch events (paginate)
    // 2. Save new event (send all users notification: make it an option?)
    const [showAddEventForm, setShowAddEventForm] = useState(false);
    const [role, setRole ] = useState("admin")

    // data fetch on page loading
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [state, setState] = useState({});

    useEffect(() => {
        fetchEvents()
        .then(response =>
            {
                setState(response)
                setIsLoading(false)
            }
        )
        .catch(error => setError(error.message));
      }, [])

    const handleAddEventClick = () => {
        setShowAddEventForm(true);
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

    const button = (handleClick) => {
        return (
            <div className="page-header">
                <button onClick={handleClick} type="button" className="btn btn-primary btn-fw">Add event</button>
            </div>
        )
    }

    const listOfEvents = () => {
        return (
            // make it reusable component use in User and Events pages
            <>
                {state.events && <OrderedDarkWithImageTable
                    title={'Events'}
                    headers={['Name', 'Date', 'Description']}
                    order={['name', 'date', 'description']}
                    data={state.events}/>
                }
            </>
        )
    }
    
    const addEventForm = () => {
        return (
            <AddEvent setShowAddEventForm={setShowAddEventForm}/>
        )
    }


    return (
        <div className="content-wrapper">
            {role === "admin" && !showAddEventForm ? 
                button(handleAddEventClick)
                : null
            }
            {/* apply same login in User page*/}
            {showAddEventForm ? addEventForm() : listOfEvents()}
        </div>
    )
}
