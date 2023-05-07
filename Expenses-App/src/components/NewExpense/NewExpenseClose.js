import React from "react";

const NewExpenseClose = ({onFinish}) => {
	const handleClick = () => {
		onFinish(true);
	}

    return (
		<div>
            <button onClick={handleClick}>Add New Expense</button>
        </div>
    );
};

export default NewExpenseClose;
