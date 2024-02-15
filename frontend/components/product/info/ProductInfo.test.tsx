import React from 'react'
import { render } from '@testing-library/react'
import ProductInfo from './ProductInfo'
import { describe, expect, it } from '@jest/globals'

describe('ProductInfo component', () => {
  describe('without samples', () => {
    it('should render correctly', () => {
      const { container } = render(
        <ProductInfo
          description="description"
          name="name"
          rating={4.5}
          reviews={1000}
          samplesAvailable={false}
        />,
      )
      expect(container).toMatchSnapshot()
    })
  })
  describe('with samples', () => {
    it('should render correctly', () => {
      const { container } = render(
        <ProductInfo
          description="description"
          name="name"
          rating={4.5}
          reviews={1000}
          samplesAvailable={true}
        />,
      )
      expect(container).toMatchSnapshot()
    })
  })
})
