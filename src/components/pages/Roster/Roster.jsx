import React from 'react';
import style from "./Roster.module.css";
import RenderRoaster from "../../RosterCard/RenderRoster";
import { getAllRoaster } from "../../../api/roster";

class Roaster extends React.Component {
    constructor(props) {
        super(props);
        // Don't do this!
        this.state = {
            roaster: []
        };
    }


    async componentDidMount() {
        try {
            await getAllRoaster().then(roaster => this.setState({ roaster: roaster }));
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return <div className="roaster_container">
            <div className="roaster_container__players">
                <RenderRoaster key={this.state.roaster} roaster={this.state.roaster} />
            </div>
            <div className="roaster_container__coaching_staff">
                <div className={style.roaster_container__section_title}><h2>COACHING STAFF</h2></div>
                <RenderRoaster key={this.state.roaster} roaster={this.state.roaster} />
            </div>

        </div>
    }

}

export default Roaster; 