import React, { Component } from "react";
import Calendar from 'react-awesome-calendar';


const events = [{
    id: 1,
    color: '#fd3153',
    from: '2022-01-06T18:00:00+00:00',
    to: '2022-01-06T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2022-02-12T13:00:00+00:00',
    to: '2022-01-12T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2022-01-18T13:00:00+00:00',
    to: '2022-01-18T20:00:00+00:00',
    title: 'This is also another event'
}];

class Home extends Component {
    constructor(props) {
        super(props);

        // Set the state directly. Use props if necessary.
        this.state = {
            isPopupOpen: false,
            events: events,
            newEventDate: {},
        }
    }

    componentDidMount() {


    }


    onClickTimeLine(date) {
        this.setState({ newEventDate: date, isPopupOpen: !this.state.isPopupOpen })


    }

    render() {

        return (
            <div className="eventCalender">
                <Calendar
                    events={this.state.events}
                    onClickTimeLine={this.onClickTimeLine.bind(this)}
                />
                {/* // use to show event details??
                {this.state.isPopupOpen &&
                    <Popup
                        handleClose={() => this.setState({ isPopupOpen: !this.state.isPopupOpen })}
                        newEventDate={this.state.newEventDate}
                    />} */}
            </div>
        )
    }
}

export default Home;