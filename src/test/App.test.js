import React from 'react'
import { render } from 'ink-testing-library'
import { App } from '../App'

const state = {
  title: "FOO GAME"
}

describe('APP', () => {
  it('returns the name of the game', () => {
    // Arrange
    const { lastFrame, rerender } = render(<App state={state}/>)

    // Assert
    expect(lastFrame()).toMatch('FOO GAME')
  })
})
