import React from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Хлеб",
      amount: "2.59",
      date: new Date(2023, 7, 30),
    },
    {
      id: "2",
      title: "Салфетки",
      amount: "1.99",
      date: new Date(2023, 7, 29),
    },
    {
      id: "3",
      title: "Колбаса",
      amount: "3.49",
      date: new Date(2023, 7, 28),
    },
    {
      id: "4",
      title: "Сыр",
      amount: "1.29",
      date: new Date(2023, 7, 27),
    },
  ];

  return (
    <div className="App">
      <h2>Мои финансы</h2>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );

  // return React.createELement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h2", {}, "Мои финансы"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
}

export default App;
