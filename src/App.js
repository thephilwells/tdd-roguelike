import React, { useState } from 'react'
import { render, Text } from 'ink'
import { Arena } from './components/Arena'

export const App = () => {
  const [title, _] = useState("TDD Roguelike!") 
  return <Arena />
}

render(<App />)
