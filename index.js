import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
function Main() {
    return (
      <div className="App">
        <App />
        <MapComponent />
      </div>
    );
  }