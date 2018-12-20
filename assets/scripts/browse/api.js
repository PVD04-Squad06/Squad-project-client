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

const addToCart = data => {
  console.log(data)
  store.cart.items = store.cart.items.concat(data)
  // define data with button's id
  // const data =
  // send a patch to carts with product info
  return $.ajax({
    url: config.apiUrl + '/cart',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ({cart: {items: store.cart.items}})
  })
}

// using stripe documentation to checkout
// const checkout = event => {
//   console.log(event.target)
// }

const womensClothingApi = function () {
  return $.ajax({
    url: config.apiUrl + '/products/womens-clothing',
    method: 'GET'
  })
}

const mensClothingApi = function () {
  return $.ajax({
    url: config.apiUrl + '/products/mens-clothing',
    method: 'GET'
  })
}
module.exports = {
  getAllProducts,
  getAProduct,
  addToCart,
  womensClothingApi,
  mensClothingApi
  // checkout
}
