import React, { useState, useEffect, useContext } from "react";
import AddUser from "../../forms/AddUser";
import { fetchUsersByRole } from "../../../api/user";
import { OrderedDarkWithImageTable } from "../../tables";
import { USERROLES } from "../../constants";
import { BlueButton } from "../../buttons";
import AuthContext from '../../shared/AuthContext'

export default function User() {
  const { user} = useContext(AuthContext);
  // show add user form toggle
  const [showUserForm, setShowUserForm] = useState(false);

  // data fetch on page loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [state, setState] = useState({});

  useEffect(() => {
    Promise.all([
      fetchUsersByRole(USERROLES.STAFF),
      fetchUsersByRole(USERROLES.PLAYER),
    ])
      .then((response) => {
        setState({
          staff: response[0].data,
          players: response[1].data,
        });
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  const handleAddUserClick = () => {
    setShowUserForm(true);
  };

  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (showUserForm)
    return <AddUser setShowUserForm={setShowUserForm} />;

  return (
    <>
      {[USERROLES.ADMIN, USERROLES.STAFF].includes(user.role.id)
        ? BlueButton(handleAddUserClick, "Add user")
        : null}
      {state.staff && (
        <OrderedDarkWithImageTable
          title={"Coaching staff"}
          headers={["Name", "Positions", "Date of birth"]}
          order={["name", "position", "dob"]}
          link={true}
          url={"/me"}
          data={state.staff}
        />
      )}
      {state.players && (
        <OrderedDarkWithImageTable
          title={"Players"}
          headers={["Name", "Position", "Date of birth", "Height", "Weight"]}
          order={["name", "position", "dob", "height", "weight"]}
          link={true}
          url={"/me"}
          data={state.players}
        />
      )}
    </>
  );
}
