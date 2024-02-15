import React from 'react'
import { render } from '@testing-library/react'
import NavBarLogo from './NavBarLogo'
import { describe, expect, it } from '@jest/globals'

describe('NavBarLogo component', () => {
  it('should render correctly', () => {
    const { container } = render(<NavBarLogo variant="cart" />)
    expect(container).toMatchSnapshot()
  })
})
