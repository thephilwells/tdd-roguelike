import React, { createContext } from 'react'
import StateProvider from './game-hooks'
import { render, Text } from 'ink'
import { Arena } from './components/Arena'

export const App = () => {
  return <Arena />
}

render(
  <StateProvider>
    <App />
  </StateProvider>,
  {patchConsole: false}
)
