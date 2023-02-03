import './card.css';
function Date(props) {
  const month = props.date.toLocaleDateString('en-US', { month: 'long' });
  const day = props.date.toLocaleDateString('en-US', { day: '2-digit' });
  //const day = 'day';
  const year = props.date.getFullYear();

  return (
    <div  className='date'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default Date;