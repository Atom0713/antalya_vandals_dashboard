import React from 'react';
import style from "./Roster.module.css";
import RenderCard from "../../RosterCard/RenderCard";
import { getRoaster } from "../../../api/roster";

class Roaster extends React.Component {
    constructor(props) {
        super(props);
        // Don't do this!
        this.state = {
            error: null,
            players: [],
            coaches: [],
            isLoading: false
        };
    }


    componentDidMount() {
        this.setState({
            isLoading: true,
        })

        Promise.all([
            getRoaster(1),
            getRoaster(2)
        ])
            .then(([players, coaches]) => {
                this.setState({
                    players: players.data,
                    coaches: coaches.data,
                    isLoading: false,
                })
            }).catch(error => {
                this.setState({
                    error,
                    isLoading: false,
                })
                this.props.onError(error)
            })
    }

    render() {
        if (this.state.isLoading) {
            return <div></div>
        }

        // show something if there is no data to show
        if (this.state.players === [] && this.state.coaches === []) {
            return <div>NONE</div>
        }

        return <div className="roaster_container">
            <div className="roaster_container__players">
                {this.state.players.map((item, i) => (
                    <RenderCard key={i} item={item} />
                ))}
            </div>
            <div className="roaster_container__coaching_staff">
                <div className={style.roaster_container__section_title}><h2>COACHING STAFF</h2></div>
                {this.state.coaches.map((item, i) => (
                    <RenderCard key={i} item={item} />
                ))}
            </div>
        </div>
    }
}

export default Roaster; 