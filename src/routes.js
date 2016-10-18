// Modules
import React from 'react';
import { Route } from 'react-router'

// Primary Component
import App from './App'


// Main components

import NewGame from './components/container/NewGame'

import GameBoard from './components/container/GameBoard'

export default (
  <Route path="/" component={App} >
    <Route path="NewGame" component={{main: NewGame}}/>
    <Route path="GameBoard" component={{main: GameBoard}}/>
  </Route>
)
