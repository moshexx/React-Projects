import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses for {props.selectedYear}</h2>
    }

    return <ul className="expenses-list">{props.expenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
        />
    ))}</ul>;
}

export default ExpensesList;