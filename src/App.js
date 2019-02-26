import React, { Component } from 'react';
import DisplayBoard from './components/displayBoard';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      grid: Array(9).fill(null),
      player: null,
      winner: null,
      tie: false
    }
  }

  checkWinner() {

    let winnerPairs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    this.MatchCoordinates(winnerPairs);
  }

  isMatchTie() {
    if (this.state.grid.includes(null) === false) {
      console.log('its a tie')
      this.setState({
        tie: true
      })
    }
  }

  MatchCoordinates(winnerPairs) {

    for (let i = 0; i < winnerPairs.length; i++) {
      let grid = this.state.grid;
      const [x, y, z] = winnerPairs[i];
      if (grid[x] && grid[x] === grid[y] && grid[y] === grid[z]) {
        let winner = this.state.player
        this.setState({
          winner
        })
      }
    }

  }

  handleBoxClick(index) {
    if(!this.state.grid[index] && !this.state.winner) {
      let newGrid = this.state.grid;
      newGrid[index] = this.state.player;
      this.setState({
        grid: newGrid,
        player: (this.state.player === "X") ? "O" : "X"
      });
      this.checkWinner();
      this.isMatchTie();
    }
  }

  setPlayer(player) {
    this.setState({
      player
    })
  }

  reload() {
    console.log('reload')
    this.setState({
      grid: Array(9).fill(null),
      player: null,
      winner: null,
      tie: false
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Tie Tac Toe</h1>
        <div className="grid">
          {this.state.grid.map((box, index) => {
            return <div className="box" key={index} onClick={() => this.handleBoxClick(index)}>{box}</div>
          })}
        </div>
        <DisplayBoard winner={this.state.winner} player={this.state.player} setPlayer={(e) => this.setPlayer(e)} tie={this.state.tie}/>
        <button onClick={() => this.reload()}>Reload the Game</button>
      </div>
    );
  }
}

export default App;
