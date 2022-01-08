import { handleApiResponse } from "./responseHelper";
import { REACT_APP_DASHBOARD_SERVICE_URL } from "../components/constants";

export async function getAllRoaster() {
  return fetch(`${REACT_APP_DASHBOARD_SERVICE_URL}/roster/all/`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleApiResponse);
}
