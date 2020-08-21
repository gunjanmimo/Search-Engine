import React from 'react';
import './App.css';
import Home from './Home';
function App() {
  return (
    // BEM
    <div className="app">
      <h1>My search Engine</h1>


      {/* Home Page (this is with the search bar)*/}
<Home />

      {/*Search page ( to show all the search result)*/}
    </div>
  );
}

export default App;
