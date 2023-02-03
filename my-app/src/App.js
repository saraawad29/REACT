import Expense from './composent/card/expense';
import './composent/card/card.css';

function App() {
  const fausseexpense= [
    {
      id: 'box1',
      name: 'Box anglaise',
      cout: 150,
      date: new Date(2023, 5, 26)
    },
    {
      id: 'box2',
      name: 'Box français',
      cout: 225,
      date: new Date(2023, 4, 6)
    },
    {
      id: 'box3',
      name: 'MMA',
      cout: 250,
      date: new Date(2023, 8, 17)
    },
  ];
  return (
    <div className="app-container">
      <Expense expense={fausseexpense}/>
    </div>
   
  );
}

export default App;
