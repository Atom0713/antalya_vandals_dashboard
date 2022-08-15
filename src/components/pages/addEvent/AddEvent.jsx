import React from 'react';
import { BlueButton } from '../../buttons';

export default function AddEvent({setShowAddEventForm}) {
    const handleBackClick = () => {
        setShowAddEventForm(false);
    }
  return (
    <>
        {BlueButton(handleBackClick, "Back")}
        
    </>
  )
}
