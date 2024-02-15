import React from 'react'
import { render } from '@testing-library/react'
import Ratings from './Ratings'
import { describe, expect, it } from '@jest/globals'

describe('Ratings component', () => {
  describe('when receiving huge as a titleStyle', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Ratings rating={5} reviews={20000} title="title" titleStyle="huge" />,
      )

      expect(container).toMatchSnapshot()
    })
  })
  describe('when not receiving any titleStyle', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Ratings rating={5} reviews={20000} title="title" />,
      )

      expect(container).toMatchSnapshot()
    })
  })
})
