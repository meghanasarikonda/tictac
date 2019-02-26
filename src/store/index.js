import { createStore } from 'redux';
import reducer from '../reducers/index';

const initialState = {
  grid: Array(9).fill(null),
  player: null,
  winner: null,
  tie: false
}

const store = crateStore(reducer, initialState)