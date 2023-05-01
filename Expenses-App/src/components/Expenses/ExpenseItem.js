import React from "react";
// import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

/**
 *
 * @param {String title, String amount, Date date} props
 * @returns ExpenseItem element
 */
function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title);// a react hook

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount} ₪</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
