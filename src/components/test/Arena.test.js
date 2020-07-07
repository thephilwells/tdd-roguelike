import React from 'react'
import { render } from 'ink-testing-library'
import { Arena } from '../Arena'

describe('ARENA', () => {
  it('returns an empty arena container box', () => {
    const { lastFrame } = render(<Arena />)
    
    expect(lastFrame()).toMatchSnapshot()
  })
})
