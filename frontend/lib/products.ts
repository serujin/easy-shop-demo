import axios from 'axios'

const baseUrl = 'http://localhost:3001/?query='

export const getAllProductsBasicInformation = () => {
  const query = '{allProducts{id,name}}'
  return axios
    .get(`${baseUrl}${query}`)
    .then(response => response.data)
    .then(data => data.data.allProducts)
    .catch(error => console.log(error))
}

export const getProductInformationById = (id: string) => {
  const query = `{Product(id:"${id}"){name,description,rating,reviews,sizeOptions,quantityOptions}}`
  return axios
    .get(`${baseUrl}${query}`)
    .then(response => response.data)
    .then(data => data.data.Product)
    .catch(error => console.log(error))
}
