import React from "react";
import SubButtons from "./SubButtons";

class Buttons extends React.Component {
  render() {
    return this.props.edd.map((ed) => (
      <button
        className="buttonobj button1 "
        onClick={() => console.log(ed.op1)}
      >
        {ed.branch}
      </button>
    ));
  }
}
export default Buttons;
