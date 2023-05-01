import React from "react";
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const handleSaveExpense = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: generateId()
        };
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={handleSaveExpense} />
    </div>;
};

const generateId = () => Math.random().toString();

export default NewExpense;