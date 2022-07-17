import React, { useState } from "react";



function App() {
  const [counter, setCounter] = useState(0);



  return (
    <div className="App">
         <div className="container mt-5">
           <div className="row text-center">
              <h1> Counter Test Application</h1>
              <h3 className="mt-2">Counter: {counter}</h3>
           </div>
           <hr></hr>
           <div className="row">
             <div className="col-md-12 text-center"> <a onClick={ () => setCounter(counter + 1)} className="btn btn-success mr-2">Increment</a><a onClick={() => setCounter(counter - 1)} className="btn btn-danger ml-2">Decrement</a><a onClick={() => setCounter(counter - counter)} className="btn btn-primary">Reset</a></div>         
           </div>
         </div>

    </div>
  );
}

export default App;
