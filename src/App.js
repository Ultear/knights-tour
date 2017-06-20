import React, { Component } from 'react';
import Matrix from './components/Matrix'

class App extends Component {

  constructor() {
    super()
    this.state = {
      boardSize: 8
    }

    this.changeBoardSize = this.changeBoardSize.bind(this)
  }

  changeBoardSize(e) {
    this.setState({
      boardSize: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <div className="app">
        <Matrix boardSize={this.state.boardSize} />
      </div>
    );
  }
}

export default App;
