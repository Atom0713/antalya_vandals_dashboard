import React, { useState, useEffect } from "react";
import AddEvent from "../../forms/AddEvent";
import { fetchEvents } from "../../../api/events";
import { OrderedDarkWithImageTable } from "../../tables";
import { BlueButton } from "../../buttons";
import Event from "../event/Event";
import { USERROLES } from "../../constants";

export default function Events({ userRole, user }) {
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  // data fetch on page loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [state, setState] = useState({});

  useEffect(() => {
    fetchEvents()
      .then((response) => {
        setState(response.data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  const handleAddEventClick = () => {
    setShowAddEventForm(true);
  };

  if (error)
    return (
      <div className="row">
        <h1>{error}</h1>
      </div>
    );

  if (isLoading)
    return (
      <div className="row">
        <h1>Loading...</h1>
      </div>
    );

  if (showAddEventForm)
    return <AddEvent setShowAddEventForm={setShowAddEventForm} />;

  return (
    <>
      {[USERROLES.Admin, USERROLES.Staff].includes(userRole.id) &&
      !showAddEventForm
        ? BlueButton(handleAddEventClick, "Add event")
        : null}
      {state.events && (
        <OrderedDarkWithImageTable
          title={"Events"}
          headers={["Name", "Date", "Description"]}
          order={["name", "date", "description"]}
          data={state.events}
          link={true}
          url={"/event"}
          component={Event}
        />
      )}
    </>
  );
}
