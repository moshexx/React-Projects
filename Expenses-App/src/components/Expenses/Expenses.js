import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../Features/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({expenses}) {
    const [selectedYear, setSelectedYear] = useState(
        new Date().getFullYear().toString()
    ); //default value
    const filteredExpenses = expenses.filter((expense) => {
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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList selectedYear={selectedYear} expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
