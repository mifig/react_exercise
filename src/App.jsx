import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./counter";

function App() {


  return ( 
    <div className='my-2 text-center'>
      <h1>My counters:</h1>
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
