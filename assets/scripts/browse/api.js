'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const getAllProducts = () => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const getAProduct = event => {
  console.log(event.target)
  console.log(event.target.id)
  return $.ajax({
    url: config.apiUrl + '/products/:id',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  getAllProducts,
  getAProduct
}
