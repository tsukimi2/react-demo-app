import React from "react";

const JokeItem = (props) => {
  return (
    <div className="z-depth-5">
      <ul className="collection" style={{ marginTop: "15px" }}>
        <li className="collection-item avatar">
          <img
            src={props.img}
            alt="Chuck"
            className="circle"
            style={{ marginTop: "10px" }}
          />

          <p className="flow-text joke" style={{ marginTop: "15px" }}>
            {props.joke}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default JokeItem;
