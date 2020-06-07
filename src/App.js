import React from 'react';
import './App.css';
import Lists from './Task2';
import JSExpression from './Task3'
import ApplyingCss from './Task4'

function App({name}) {
  return <div> 
    <div> <h1>Task 1</h1>
      <p>   Hello form <strong> {name}</strong></p>
      <Lists heading="Task 2 (Display Items in Lists)"></Lists>
      <JSExpression heading="Task 3 (JS Expression)" age='26'></JSExpression>
      <ApplyingCss heading="Task 4 (Adding CSS)"></ApplyingCss>
    </div>
    </div>
}

export default App;
