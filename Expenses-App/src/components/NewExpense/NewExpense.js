import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseOpen from './NewExpenseOpen';
import NewExpenseClose from './NewExpenseClose';

const NewExpense = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    let contant;
    if (isOpen) {
        contant = <NewExpenseOpen onAddExpense={props.onAddExpense} onFinish={setIsOpen} />
    } else {
        contant = <NewExpenseClose onFinish={setIsOpen} />
    }

    return <div className="new-expense">{contant}</div>
};

export default NewExpense;