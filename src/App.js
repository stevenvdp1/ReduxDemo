import React from 'react';
import Counter from './components/Counter';
import Reset from './components/Reset';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Total/>
      <Reset/>
    </div>
  );
}

export default App;
