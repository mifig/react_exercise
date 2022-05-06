import { useState } from 'react';

function Counter({ id, initial, step = 1, onDelete }) {
  let [counter, setCounter] = useState(initial);
  let [disabled, setDisabled] = useState(false);

  const handleSumCounter = (event) => {
    setCounter(counter + step);
  };

  const handleSubCounter = (event) => {
    if(counter > 0) {
      setCounter(Math.max(counter - step,0));
    };
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        <button className="btn btn-danger me-1" onClick={handleSubCounter} disabled={counter === 0}>-</button>
        <div className='mx-2 d-flex align-items-center'>
          <p className="m-0">{counter}</p>
        </div>
        <button className="btn btn-success ms-1" onClick={handleSumCounter}>+</button>
      </div>
      <button className="btn btn-warning mt-2" onClick={handleDelete}>remove counter</button>
    </>
  );
};

export default Counter;
