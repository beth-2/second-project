import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=> {
  return(
    <div>
      <h1 style={{textAlign:"center"}}>This is Season App</h1>
    </div>
  );
};

ReactDOM.render(<App/>,document.querySelector('#root'))