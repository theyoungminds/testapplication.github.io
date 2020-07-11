import React from "react";

import { Spring } from "react-spring/renderprops";

import {
  faHome,
  faBook,
  faMoneyBill,
  faCalendar,
  faCoins,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Side extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, margin: -500 }}
        to={{ opacity: 1, margin: 0 }}
      >
        {(props) => (
          <div className="side">
            <h2>Menu</h2>
            <div className="fakeimg">
              <FontAwesomeIcon icon={faHome} />
              <button className="buttonobj button1">Home</button>

              <br />
              <FontAwesomeIcon icon={faBook} />
              <button className="buttonobj button1">Classroom</button>
              <br />
              <FontAwesomeIcon icon={faCoins} />
              <button className="buttonobj button1">Resources</button>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <button className="buttonobj button1">Calender</button>
              <br />
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Side;
