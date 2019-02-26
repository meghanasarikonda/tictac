import {SET_PLAYER, SET_WINNER, PAINT_GRID, TIE, RELOAD} from './types';

export function setPlayer(player) {
  return {
    type: SET_PLAYER,
    player
  }
}

export function setWinner(winner) {
  return {
    type: SET_WINNER,
    winner
  }
}

export function setTie(tie) {
  return {
    type: TIE,
    tie
  }
}

export function setReload() {
  return {
    type: RELOAD,
    grid: Array(9).fill(null),
    player: null,
    winner: null,
    tie: false
  }
}

export function paintGrid(grid, player) {
  return {
    type: PAINT_GRID,
    grid,
    player
  }
}

