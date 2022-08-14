import React, { useState, useEffect } from 'react'
import AddEvent from './AddEvent';

export default function Event() {
    // TODO: 
    // 1. Fetch events (paginate)
    // 2. Save new event (send all users notification: make it an option?)
    const [showAddEventForm, setShowAddEventForm] = useState(false);
    const [role, setRole ] = useState("admin")

    const handleAddEventClick = () => {
        setShowAddEventForm(true);
    }

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
                {role === "admin" ? 
                    button(handleAddEventClick)
                    : null
                }

                Events
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
            {/* apply same login in User page*/}
            {showAddEventForm ? addEventForm() : listOfEvents()}
        </div>
    )
}
