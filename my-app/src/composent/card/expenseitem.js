import Date from './date';
import './card.css';

function ExpenseItem(props) {
  return (
    <div className='card-container'>
      <Date date={props.date}/>
      <div className='name'>{props.name}</div>
      <div className='cout'>${props.cout}</div>
    </div>
)}

export default ExpenseItem; 