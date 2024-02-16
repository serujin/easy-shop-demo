import { describe, it } from '@jest/globals'
import app from './app'
import request from 'supertest'
import database from '../database.json'

const correctData = {
  allProducts: database.products.map(product => ({
    id: product.id,
    name: product.name,
  })),
}

describe('Test the root path', () => {
  it('should response the POST method', () => {
    const data = {
      query: '{allProducts{id,name}}',
    }
    return request(app).post('/').send(data).expect(200)
  })
  it('should response the correct data', () => {
    const data = {
      query: '{allProducts{id,name}}',
    }
    return request(app)
      .post('/')
      .send(data)
      .then(response => {
        expect(response.body.data).toEqual(correctData)
      })
  })
  it('should response the correct data', () => {
    const data = {
      query: `{Product(id:"${correctData.allProducts.at(0)?.id}"){name,description,rating,reviews,sizeOptions,quantityOptions}}`,
    }
    return request(app)
      .post('/')
      .send(data)
      .then(response => {
        expect(response.body.data).toMatchSnapshot()
      })
  })
})
