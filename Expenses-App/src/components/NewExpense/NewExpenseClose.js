import React from "react";

const NewExpenseClose = (props) => {
	const handleClick = () => {
		props.onFinish(true);
	}

    return (
		<div>
            <button onClick={handleClick}>Add New Expense</button>
        </div>
    );
};

export default NewExpenseClose;
