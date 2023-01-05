import React from "react";
import "./App.css";
import { ROUTES } from "./routes";
import { AuthContextProvider } from './components/shared/useAuth';

export default function App() {

  return (
    <AuthContextProvider>
      {ROUTES}
    </AuthContextProvider>
  );
}
