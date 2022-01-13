import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import Roaster from "./components/pages/Roster/Roster";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roster" element={<Roaster />}></Route>
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
