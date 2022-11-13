import React, { useState, useEffect, useContext } from "react";
import { AddUser } from "../forms/";
import { fetchUsersByRole, fetchUser } from "../../api/";
import { OrderedDarkWithImageTable } from "../tables";
import { USERROLES } from "../constants";
import { BlueButton } from "../buttons";
// import { useLocalStorage } from "../shared/useLocalStorage";
import { Layout } from '../';

export default function User() {
  // const [] = useLocalStorage("user", null);
  // show add user form toggle
  const [showUserForm, setShowUserForm] = useState(false);

  // data fetch on page loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [state, setState] = useState({});

  useEffect(() => {
    Promise.all([
      fetchUser(),
      fetchUsersByRole(USERROLES.STAFF),
      fetchUsersByRole(USERROLES.PLAYER),
    ])
      .then((response) => {
        setState({
          user: response[0],
          staff: response[1].data,
          players: response[2].data,
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
    return <AddUser setShowUserForm={setShowUserForm} user={state.user} />;

  return (
    <Layout>
      {[USERROLES.ADMIN, USERROLES.STAFF].includes(state.user.role.id)
        ? BlueButton(handleAddUserClick, "Add user")
        : null}
      {state.staff && (
        <OrderedDarkWithImageTable
          title={"Coaching staff"}
          headers={["Name", "Positions", "Date of birth"]}
          order={["first_name", "position", "dob"]}
          link={true}
          url={"/me"}
          data={state.staff}
        />
      )}
      {state.players && (
        <OrderedDarkWithImageTable
          title={"Players"}
          headers={["Name", "Position", "Date of birth", "Height", "Weight"]}
          order={["first_name", "position", "dob", "height", "weight"]}
          link={true}
          url={"/me"}
          data={state.players}
        />
      )}
    </Layout>
  );
}
