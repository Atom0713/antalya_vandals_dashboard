import { handleApiResponse } from "./responseHelper";
import {
  REACT_APP_DASHBOARD_SERVICE_URL,
  REACT_APP_ORGANIZATION_ID,
} from "../components/constants";

// public endpoint
export async function getRosterTypes() {
  return fetch(`${REACT_APP_DASHBOARD_SERVICE_URL}/roster/type/`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleApiResponse);
}

// public endpoint
export async function getRoaster(type_id) {
  return fetch(
    `${REACT_APP_DASHBOARD_SERVICE_URL}/roster/organization/${REACT_APP_ORGANIZATION_ID}/type/${type_id}/`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(handleApiResponse);
}
