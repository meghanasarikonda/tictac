import React, { Component } from 'react';
import DisplayBoard from './components/displayBoard';
import './App.css';
import { connect } from 'react-redux';
import { setPlayer, setWinner, setTie, setReload, paintGrid } from './actions/index';

class App extends Component {

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
    if (this.props.grid.includes(null) === false) {
      this.props.setTie(true)
      alert(`Its a tie!`)
    }
  }

  MatchCoordinates(winnerPairs) {
    for (let i = 0; i < winnerPairs.length; i++) {
      let grid = this.props.grid;
      const [x, y, z] = winnerPairs[i];
      if (grid[x] && grid[x] === grid[y] && grid[y] === grid[z]) {
        let winner = this.props.player
        this.props.setWinner(winner);
        if (!this.props.winner) 
          alert(`${winner} won`)
      }
    }
  }

  handleBoxClick(index) {
    if(!this.props.grid[index] && !this.props.winner) {
      let newGrid = this.props.grid;
      newGrid[index] = this.props.player;
      this.props.paintGrid(newGrid, (this.props.player === "X") ? "O" : "X");
      this.checkWinner();
      this.isMatchTie();
    }
  }

  setPlayer(player) {
    this.props.setPlayer(player)
  }

  reload() {
    this.props.setReload();
  }


  render() {
    return (
      <div className="App">
        <h1>Tie Tac Toe</h1>
        <div className="grid">
          {this.props.grid.map((box, index) => {
            return <div className="box" key={index} onClick={() => this.handleBoxClick(index)}>{box}</div>
          })}
        </div>
        <DisplayBoard winner={this.props.winner} player={this.props.player} setPlayer={(e) => this.setPlayer(e)} tie={this.props.tie}/>
        <button onClick={() => this.reload()}>Reload the Game</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grid: state.grid,
    player: state.player,
    winner: state.winner,
    tie: state.tie
  }
}

export default connect(
  mapStateToProps,
  {
    setPlayer,
    setWinner,
    setTie,
    setReload,
    paintGrid
  }
)(App);
