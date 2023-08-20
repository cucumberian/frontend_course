/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Название</label>
          <input type="text" />
        </div>

        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Сумма</label>
            <input type="number" min="0.01" step="10" />
          </div>
        </div>

        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Дата</label>
            <input type="date" min="2020-01-01" max="2023-12-31" lang="ru-RU" />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Добавить</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
