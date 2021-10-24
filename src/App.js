import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./components/pages/homepage/homepage";
import Roaster from "./components/pages/roaster/roaster";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/roaster" exact>
            <Roaster />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
