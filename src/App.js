import React, { useState } from 'react'
import { render, Text } from 'ink'
import { Arena } from './components/Arena'

export const App = () => {
  const [state, setState] = useState({
    title: "TDD Roguelike!",
  }) 
  return <Arena {...state}/>
}

render(<App />, {patchConsole: false})
