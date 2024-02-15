import React from 'react'
import { render } from '@testing-library/react'
import Home from './page'
import { describe, expect, it } from '@jest/globals'

describe('Home page', () => {
  it('should render correctly', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
