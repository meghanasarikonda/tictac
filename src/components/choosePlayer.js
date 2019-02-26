import React, { Component } from 'react';

class ChoosePlayer extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.player.value);
    this.props.setPlayer(e.target.player.value);

  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}> 
          <label>
            Choose X
            <input type="radio" name="player" value="X" />
            Choose O
            <input type="radio" name="player" value="O" />
          </label>
          <input type="submit" value="play" />
        </form>
      </div>
    )
  }

}

export default ChoosePlayer;