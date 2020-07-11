import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="active">
        <input
          type="form"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Search here"
        />
      </div>
    </div>
  );
}
