import React, { useState } from 'react'
import { render, Text, Box } from 'ink'
import { TitleCard } from './titlecard'

export const Arena = (props) => {
  let [gameState, updateGameState] = useState(props)
  return (
    <Box
      width={80}
      height={45}
      borderStyle="double"
      display="flex"
    >
      <TitleCard />
    </Box>
  )
}
