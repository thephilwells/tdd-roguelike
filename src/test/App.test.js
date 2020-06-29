import React from 'react'
import { render } from 'ink-testing-library'
import { App } from '../App'

describe('APP', () => {
  it('returns the name of the game', () => {
    // Arrange
    const { lastFrame, rerender } = render(<App />)

    // Assert
    expect(lastFrame()).toMatch('TDD Roguelike!')
  })
})
