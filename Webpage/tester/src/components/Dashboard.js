import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: "Maths",
      credits: "200 points!",
    };
  }

  render() {
    return (
      <div className="fakeimg">
        <h3>{this.state.subject}</h3>
        <h3>{this.state.credits}</h3>
      </div>
    );
  }
}

export default Dashboard;
