import React, { useContext } from 'react'
import { useGameContext } from '../game-hooks'
import { render, Text, Box } from 'ink'

export const TitleCard = (props) => {
  const { state } = useGameContext()
  return (
    <Box flexDirection="column" width="100%" justifyContent="space-around">
      <Box height="85%" alignItems="center" justifyContent="center">
        <Text>{state.title}</Text>
      </Box>
      <Box height="15%" alignItems="center" justifyContent="center">
        <Text>[Press any key to start...]</Text>
      </Box>
    </Box>
  )
}
