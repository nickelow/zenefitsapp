import React from 'react';
import reactDOM from 'react-dom';
import Home from './Home.jsx'

class App extends React.Component {
  render() {
    return (
      <div><Home/></div>
    )
  }
};

reactDOM.render(
  <App/>, document.getElementById('app')
);