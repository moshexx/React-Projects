import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../Features/ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState(
        new Date().getFullYear().toString()
    ); //default value
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    const handleYearChange = (newSelectedYear) => {
        setSelectedYear(newSelectedYear);
    };
    
    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={selectedYear}
                onSelectedYear={handleYearChange}
            />
            <ExpensesList selectedYear={selectedYear} expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
