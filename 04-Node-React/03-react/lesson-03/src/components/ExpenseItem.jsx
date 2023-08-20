import React from "react";
import { useState } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, amount, date }) {
  const [text, setText] = useState(title);

  function clickHandler() {
    setText("новое название");
    console.log("Click!");
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <p>{text}</p>
      </div>
      <div className="expense-item__price">
        <p>{`$ ${amount}`}</p>
      </div>
      <button type="button" onClick={clickHandler}>
        Изменить название
      </button>
    </div>
  );
}

export default ExpenseItem;
