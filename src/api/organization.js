import { handleApiResponse } from "./responseHelper";
import {
  REACT_APP_ORGANIZATION_ID,
  REACT_APP_DASHBOARD_SERVICE_URL,
} from "../components/constants";

export async function fetchOrgName() {
  return fetch(
    `${REACT_APP_DASHBOARD_SERVICE_URL}/org/name/${REACT_APP_ORGANIZATION_ID}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(handleApiResponse);
}
