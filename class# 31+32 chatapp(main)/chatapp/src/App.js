import React from 'react';
import './App.css';
import AppRouter from './config/router'
// import Home from './containers/Home';

class App extends React.Component{
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    )
  }

}

export default App;


// Now we Going to Connect Facebook through Firebase in our project  