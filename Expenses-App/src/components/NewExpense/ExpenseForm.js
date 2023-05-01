import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("2023-04-28");
    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: "",
    // });

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        /** If my next state depands on the previous state - we should use a function to get the most updated prev (sync the state updating is async */
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value};
        // });
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, amount: event.target.value};
        // });
    };

    const handleDateChange = (event) => {
        console.log(event.target.value);
        setDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value};
        // });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };

        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('2023-04-28');
    };

    return (
        <form onSubmit={handleSubmit}>
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
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
