import React from "react";
import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const dayMonth = date.toLocaleString("ru", { month: "long", day: "numeric" });
  const year = date.getFullYear();
  return (
    <div className="expense-item__date">
      <span>
        {year} | {dayMonth}
      </span>
    </div>
  );
}

export default ExpenseDate;
