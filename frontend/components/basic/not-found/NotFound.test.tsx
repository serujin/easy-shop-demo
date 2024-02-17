import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'
import NotFound from './NotFound'

describe('NotFound component', () => {
  it('should render correctly without props', () => {
    const { container } = render(<NotFound />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly with isIndex prop', () => {
    const { container } = render(<NotFound isIndex />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly with is404 prop', () => {
    const { container } = render(<NotFound is404 />)
    expect(container).toMatchSnapshot()
  })
})
