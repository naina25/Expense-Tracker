import React from "react";

const Transaction = (props) => {
  const sign = props.amount > 0 ? "+" : "-";
  return (
    <div>
      <li className={props.amount > 0 ? "plus" : "minus"}>
        {props.text}{" "}
        <span>
          {sign}${Math.abs(props.amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
};

export default Transaction;
