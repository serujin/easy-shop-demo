import React from 'react'
import { render } from '@testing-library/react'
import ItemWrapper from './ItemWrapper'
import { describe, expect, it } from '@jest/globals'

describe('ItempWrapper component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ItemWrapper
        href="href"
        imgAlt="imgAlt"
        imgSrc="/imgSrc"
        title="title"
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
