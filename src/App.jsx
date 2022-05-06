import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./Counter";
import { useState } from 'react';

function App() {
  const [counters, setCounters] = useState([
    { id: 1, initial: 0 },
    { id: 2, initial: 10, step: 2 },
    { id: 3, initial: 3, step: 5 }
  ]);

  const handleAddCounter = () => {
    setCounters([{ id: new Date().getTime(), initial: 0 }, ...counters]);
  };

  const handleRemoveCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return ( 
    <div className='my-2 text-center'>
      <h1>My counters:</h1>
      <button className="btn btn-primary" onClick={handleAddCounter}>+ Add counter</button>
      <hr></hr>
      {counters.map(({ id, ...props }) => {
        return (
          <div key={id}>
            <Counter id={id} {...props} onDelete={handleRemoveCounter} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
