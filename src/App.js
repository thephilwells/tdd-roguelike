import React, { useRef, defaultProps } from 'react'
import { render, Text } from 'ink'

export const App = ({ state = { title: 'TDD Roguelike!' } }) => {
  return <Text>{state.title}</Text>
}

render(<App />)
