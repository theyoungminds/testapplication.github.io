import React, { Component } from "react";
import Buttons from "./Buttons";
import SubButtons from "./SubButtons";
import ScratchPad from "./ScratchPad";
import Dashboard from "./Dashboard";

import AddSub from "./AddSub";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Edd: [
        {
          id: 1,
          branch: "Medical",
          op1: "MBBS",
          op2: "Placeholder",
          op3: "Placeholder2",
          op4: "Placeholder3",
          show: false,
        },
        {
          id: 2,
          branch: "Engineering",
          op1: "Civil",
          op2: "Mechanical",
          op3: "Architecture",
          op4: "IT",
          show: false,
        },
        {
          id: 3,
          branch: "Architecture",
          op1: "Some1",
          op2: "Some2",
          op3: "Some3",
          op4: "Some4",
          show: false,
        },
        {
          id: 4,
          branch: "Law",
          op1: "Law1",
          op2: "Law2",
          op3: "Law3",
          op4: "Law4",
          show: false,
        },
      ],
    };
  }

  addbranch = (branch) => {
    const newEdd = {
      id: 5,
      branch: branch,
    };
    this.setState({ Edd: [...this.state.Edd, newEdd] });
  };

  render() {
    return (
      <div className="main">
        <h1>
          FACULTY <AddSub addbranch={this.addbranch} />
        </h1>

        <br />

        <div className="fakeimg">
          <Buttons edd={this.state.Edd} />
        </div>
        <br />
        <h2>YEAR</h2>
        <h5>Title description,</h5>
        <div className="fakeimg">Image</div>
        <p>Some text..</p>
        <ScratchPad />
        <br />
        <h2>Dashboard!</h2>
        <Dashboard />
      </div>
    );
  }
}
export default Main;
