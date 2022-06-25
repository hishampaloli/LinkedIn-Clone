import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function RightCardForHome() {
  return (
    <div className="right  rounded-lg">
      <p>LinkedIn News</p>
      <ul>
        <li>
          <p>Hisham made a linked in clone using react</p>{" "}
          <small>4 days ago</small>
        </li>
        <li>
          <p>What’s driving the great resignation?</p>
          <small>8 days ago</small>
        </li>
        <li>
          <p>What’s driving the great resignation?</p>
          <small>8 days ago</small>
        </li>
        <li>
          <p>What’s driving the great resignation?</p>
          <small>8 days ago</small>
        </li>
      </ul>
      <h1>
        Show more <KeyboardArrowDownIcon />
      </h1>
    </div>
  );
}

export default RightCardForHome;
