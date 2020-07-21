import React, { createContext } from 'react'
import { render, Text } from 'ink'
import { Arena } from './components/Arena'

export const GameContext = createContext()

export const App = () => {
  return <Arena />
}

const defaultState = {
  title: 'TDD Roguelike!'
}

render(
  <GameContext.Provider value={defaultState}>
    <App />
  </GameContext.Provider>,
  {patchConsole: false}
)
