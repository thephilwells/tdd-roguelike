import React, { useState } from 'react'
import { render, Text, Box } from 'ink'

export const TitleCard = (props) => {
  let [state, setSate] = useState(props)
  return (
    <Box flexDirection="column" width={80} justifyContent="space-around">
      <Box height="85%" alignItems="center" justifyContent="center">
        <Text>{state.title}</Text>
      </Box>
      <Box height="15%" alignItems="center" justifyContent="center">
        <Text>[Press any key to start...]</Text>
      </Box>
    </Box>
  )
}
