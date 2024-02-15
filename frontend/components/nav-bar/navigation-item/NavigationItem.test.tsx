import React from 'react'
import { render } from '@testing-library/react'
import NavigationItem from './NavigationItem'
import { describe, expect, it } from '@jest/globals'

describe('NavigationItem component', () => {
  it('should render correctly', () => {
    const { container } = render(<NavigationItem text="text" />)
    expect(container).toMatchSnapshot()
  })
})
