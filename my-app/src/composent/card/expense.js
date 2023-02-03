import Expenseitem from './expenseitem';
import './card.css';

function Expense(props) {
  return (
    <div>
      <Expenseitem
        name={props.expense[0].name}
        cout={props.expense[0].cout}
        date={props.expense[0].date}
      />
      <Expenseitem
        name={props.expense[1].name}
        cout={props.expense[1].cout}
        date={props.expense[1].date}
      />
      <Expenseitem
        name={props.expense[2].name}
        cout={props.expense[2].cout}
        date={props.expense[2].date}
      />
    </div>
  );
}

export default Expense;