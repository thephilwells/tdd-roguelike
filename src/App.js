import React, { useState } from 'react'
import { render, Text } from 'ink'

export const App = () => {
  const [title, _] = useState("TDD Roguelike!") 
  return <Text>{title}</Text>
}

render(<App />)
