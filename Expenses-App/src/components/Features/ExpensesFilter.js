import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = ({onSelectedYear, selectedYear}) => {
    const NUM_OF_YEARS_TO_DISPLAY = 3;

    const handleYearChange = (event) => {
        const selectedYear = event.target.value;
        onSelectedYear(selectedYear);
    };

    const generateOptions = () => {
        const currentYear = new Date().getFullYear();
        const earliestYear = currentYear - NUM_OF_YEARS_TO_DISPLAY;
        const options = [];

        for (let year = currentYear; year >= earliestYear; year--) {
            options.push(
                <option key={year} value={year}>
                    {year}
                </option>
            );
        }

        return options;
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={selectedYear} onChange={handleYearChange}>{generateOptions()}</select>
            </div>
        </div>
    );
};

export default ExpensesFilter;

// Terms for this component
// A controlled component - both the value and changes for the value are handled outside the component: via the props selectedYear & onSelectedYear
// A presentational component
// A stateless component (NOT statefull)
// A dumb component (NOT smart)