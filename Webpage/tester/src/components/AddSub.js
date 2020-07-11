import React from "react";
import Popup from "reactjs-popup";

class AddSub extends React.Component {
  state = {
    branch: "",
  };
  onChange = (e) => this.setState({ branch: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addbranch(this.state.branch);
    this.setState({ branch: "" });
  };

  render() {
    return (
      <div>
        <Popup modal trigger={<button>Add</button>}>
          <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
            <input
              type="text"
              name="title"
              style={{ flex: "10", padding: "5px" }}
              placeholder="Add New Subject"
              value={this.state.branch}
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Submit"
              className="btn"
              style={{ flex: "1" }}
            />
          </form>
        </Popup>
      </div>
    );
  }
}

export default AddSub;
