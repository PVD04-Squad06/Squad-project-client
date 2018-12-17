'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const getAllProducts = event => {
  console.log('getAllProducts', store.user)
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

const addToCart = event => {
  console.log(event.target)
  const data = event.target
  // send a patch to carts with product info
  return $.ajax({
    url: config.apiUrl + '/carts/:id',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data // send product price
  })
}

// using stripe documentation to checkout
// const checkout = event => {
//   console.log(event.target)
// }

module.exports = {
  getAllProducts,
  getAProduct,
  addToCart
  // checkout
}
