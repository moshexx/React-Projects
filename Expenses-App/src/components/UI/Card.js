// a shell componnent - עוטף
// חוסך קוד של הקומפוננטה  החיצונית (בשונה מקומפוננטה רגילה שחוסכמת קוד בקומפוננטות הפנימיות שחוזרות על עצמן)
// כרגע משמש רק להוספת עיצוב שחוזרת על עצמו במספר קומפוננטות שונות
import "./Card.css";

function Card(props) {
    const classes = `card ${props.className}`;
    return <div className={classes}>{props.children}</div>;
}

export default Card;
