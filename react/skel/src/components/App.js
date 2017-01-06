import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Who are you',
    };
  }
  render() {
    return (
      <div>
        <button onClick={ ()=>{this.setState({ name: 'I am minho' });} }>ClickMe</button>
        <h1>Hello! {this.state.name} </h1>
      </div>
    );
  }
}

export default App;
