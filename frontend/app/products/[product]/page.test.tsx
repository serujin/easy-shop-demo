import React from 'react'
import { render } from '@testing-library/react'
import Product from './page'
import { describe, expect, it } from '@jest/globals'

describe('Product page', () => {
  // TODO: Need to think a better way to test this
  it('should render correctly', () => {
    const { container } = render(<Product />)
    expect(container).toMatchSnapshot()
  })
})
