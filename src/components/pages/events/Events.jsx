import React, { useState, useEffect, useContext } from "react";
import AddEvent from "../../forms/AddEvent";
import { fetchEvents } from "../../../api/events";
import { OrderedDarkWithImageTable } from "../../tables";
import { BlueButton } from "../../buttons";
import Event from "../event/Event";
import { USERROLES } from "../../constants";
import AuthContext from '../../shared/AuthContext';

export default function Events() {
  const { user } = useContext(AuthContext);
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
      {[USERROLES.ADMIN, USERROLES.STAFF].includes(user.role.id) &&
      !showAddEventForm
        ? BlueButton(handleAddEventClick, "Add event")
        : null}
      {state.events && (
        <OrderedDarkWithImageTable
          title={"Events"}
          headers={["Name", "Description", "Location", "Date", "Completed"]}
          order={["name", "description", "location", "date", "completed"]}
          data={state.events}
          link={true}
          url={"/event"}
          component={Event}
        />
      )}
    </>
  );
}
