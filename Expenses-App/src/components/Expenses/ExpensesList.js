import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({expenses, selectedYear}) {
    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses for {selectedYear}</h2>
    }

    return <ul className="expenses-list">{expenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
        />
    ))}</ul>;
}

export default ExpensesList;