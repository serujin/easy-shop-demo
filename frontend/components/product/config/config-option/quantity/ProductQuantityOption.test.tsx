import React from 'react'
import { render } from '@testing-library/react'
import ProductQuantityOption from './ProductQuantityOption'
import { describe, expect, jest, it } from '@jest/globals'

describe('ProductQuantityOption component', () => {
  describe('with only required props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <table>
          <tbody>
            <ProductQuantityOption
              handleQuantityChange={jest.fn()}
              optionNumber={0}
              selectedQuantity="selectedQuantity"
              value="value"
            />
          </tbody>
        </table>,
      )

      expect(container).toMatchSnapshot()
    })
  })
  describe('with all props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <table>
          <tbody>
            <ProductQuantityOption
              handleQuantityChange={jest.fn()}
              optionNumber={0}
              selectedQuantity="selectedQuantity"
              value="value"
              discount={10}
              price={{ quantity: 0, currency: '$' }}
              isLast
            />
          </tbody>
        </table>,
      )
      expect(container).toMatchSnapshot()
    })
  })
})
