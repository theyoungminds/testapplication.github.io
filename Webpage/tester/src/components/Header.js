import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Header() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <div className="header">
            <h1>Young Minds</h1>
            <p>
              A <b>STEM</b> education initiative.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
