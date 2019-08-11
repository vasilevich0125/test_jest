import React from 'react';
import './App.css';
import Table from './Components/Table/Table';
import ChartRenderer from './Components/chart/chart.js';

function App() {
  return (
    <div className="App">
      <ChartRenderer />
      <Table />
    </div>
  );
}

export default App;
