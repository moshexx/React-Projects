import React from "react";
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpenseOpen = (props) => {
    const handleSaveExpense = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: generateId()
        };
        props.onAddExpense(expenseData);
    }

    const handleFinish = () => {
        props.onFinish(false);
    }

    return <div>
        <ExpenseForm onSaveExpenseData={handleSaveExpense} onFinish={handleFinish} />
    </div>;
}

const generateId = () => Math.random().toString();

export default NewExpenseOpen;
