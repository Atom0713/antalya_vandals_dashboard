import React from 'react'

export default function AddEvent({setShowAddEventForm}) {
    const handleClick = () => {
        setShowAddEventForm(false);
    }

    const button = (handleClick) => {
        return (
            <div className="page-header">
                <button onClick={handleClick} type="button" className="btn btn-primary btn-fw">Back</button>
            </div>
        )
    }
  return (
    <>
        {button(handleClick)}
    </>
  )
}
