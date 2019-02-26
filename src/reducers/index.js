import {SET_PLAYER, SET_WINNER, PAINT_GRID, TIE, RELOAD} from '../actions/types';


const reducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return {
        ...state,
        player: action.player
      }
    case PAINT_GRID:
      return {
        ...state,
        grid: action.grid,
        player: action.player
      }
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      }
    case TIE:
      return {
        ...state,
        tie: action.tie
      }
    case RELOAD:
      return {
        ...state,
        grid: action.grid,
        player: action.player,
        winner: action.winner,
        tie: action.tie
      }
    default: 
      return state
  }
}

export default reducer;