import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./shared/useAuth";

export const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }
    return <Outlet/>;
};
