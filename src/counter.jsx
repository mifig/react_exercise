import { useState } from 'react';

function Counter() {
  let [counter, setCounter] = useState(0);

  const handleSumCounter = () => {
    setCounter(counter += 1);
  };

  const handleSubCounter = () => {
    if(counter > 0) {
      setCounter(counter -= 1);
    }
  };

  return (
    <div className="mt-5 d-flex justify-content-center">
      <button className="btn btn-success me-1" onClick={handleSubCounter}>-</button>
      <p className="m-0">{counter}</p>
      <button className="btn btn-danger ms-1" onClick={handleSumCounter}>+</button>
    </div>
  );
};

export default Counter;
