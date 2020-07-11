import React from "react";

class SubButtons extends React.Component {
  render() {
    return (
      <div>
        <button className="buttonobj button1 ">{this.subed.op1}</button>
        <button className="buttonobj button1 ">{this.subed.op2}</button>
        <button className="buttonobj button1 ">{this.subed.op3}</button>
        <button className="buttonobj button1 ">{this.subed.op4}</button>
      </div>
    );
  }
}
export default SubButtons;
