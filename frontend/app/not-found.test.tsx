import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'
import Custom404 from './not-found'

describe('404 page', () => {
  it('should render correctly', () => {
    const { container } = render(<Custom404 />)
    expect(container).toMatchSnapshot()
  })
})
