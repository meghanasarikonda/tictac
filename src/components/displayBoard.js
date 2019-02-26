import React, { Component } from 'react';
import ChoosePlayer from './choosePlayer';

class DisplayBoard extends Component {

  setPlayer(e) {
    this.props.setPlayer(e);
  }

  render() {
    return(
      <div>
        {this.props.winner ? 
          <div>Winner is {this.props.winner}</div>
          : 
          this.props.tie? 
            <div>Match is a tie!</div> 
            : 
            this.props.player ? 
              <div>Current Player - {this.props.player}</div>
              :
              <ChoosePlayer setPlayer={(e) => this.setPlayer(e)}/>
        }
      </div>
    )
  }

}

export default DisplayBoard;