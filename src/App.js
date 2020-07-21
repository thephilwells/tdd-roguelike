import React, { createContext } from 'react'
import Game from './game-hooks'
import { render, Text } from 'ink'
import { Arena } from './components/Arena'

export const App = () => {
  return <Arena />
}

render(
  <Game>
    <App />
  </Game>,
  {patchConsole: false}
)
