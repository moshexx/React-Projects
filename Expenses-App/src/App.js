import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expensesData from "./data/expensesData"

const App = () => {
    const [expenses, setExpenses] = useState(expensesData); // a react hook

    const handleAddExpense = (newExpense) => {
        setExpenses((prevExpenses) => {
            return [newExpense, ...prevExpenses];
        });
    }
    
    return (
        <div>
            <NewExpense onAddExpense={handleAddExpense} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
