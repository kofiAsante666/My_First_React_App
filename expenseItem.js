import "./expenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <dv>March 28th 2021</dv>
      <div className="expense-item__description">
        <h2> Car Insurance</h2>
        <div className="expense-item__price"> £294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
