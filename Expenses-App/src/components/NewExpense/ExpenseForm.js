import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onFinish, onSaveExpenseData}) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("2023-04-28");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        };

        onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate(new Date().toLocaleDateString('en-CA')); //YYYY-MM-DD
        onFinish();
    };

    const handleReset = () => {
        onFinish();
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input required type="text" value={title} onChange={handleTitleChange} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        required
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        required
                        type="date"
                        min="2019-01-01"
                        step="2023-12-31"
                        value={date}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="reset">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
