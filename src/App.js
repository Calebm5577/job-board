import React from 'react';
import './App.css';

import Jobs from './jobs';

const mockJobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'Facebook'},
  {title: 'SWE 1', company: 'Amazon'},

]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
