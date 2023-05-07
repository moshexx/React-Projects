import React from "react";
import ExpenseForm from './ExpenseForm';

const NewExpenseOpen = ({onAddExpense, onFinish}) => {
    const handleSaveExpense = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: generateId()
        };
        onAddExpense(expenseData);
    }

    const handleFinish = () => {
        onFinish(false);
    }

    return <div>
        <ExpenseForm onSaveExpenseData={handleSaveExpense} onFinish={handleFinish} />
    </div>;
}

const generateId = () => Math.random().toString();

export default NewExpenseOpen;
