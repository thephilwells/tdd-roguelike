import React from 'react'
import { render, Text, Box } from 'ink'
import { TitleCard } from './titlecard'

export const Arena = () => {
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
