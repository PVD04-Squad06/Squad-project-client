'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAllProducts = event => {
  event.preventDefault()
  console.log('onGetAllProducts', event.target)
  document.getElementById('productList').hidden = false
  api.getAllProducts()
    .then(ui.getAllProductsSuccess)
    .catch(ui.getAllProductsFailure)
}

const onGetAProduct = event => {
  event.preventDefault()
  console.log(event.target)
  api.getAProduct()
    .then(ui.getAProductSuccess)
    .catch(ui.getAProductFailure)
}

const onAddToCart = event => {
  event.preventDefault()
  console.log(event.target)
  api.addToCart()
    .then(ui.addToCartSuccess)
    .catch(ui.addToCartFailure)
}

// Stripe checkout
// const onCheckout = event => {
//   event.preventDefault()
//   console.log(event.target)
//   api.checkout()
//     .then(ui.checkoutSuccess)
//     .catch(ui.checkoutFailure)
// }

module.exports = {
  onGetAllProducts,
  onGetAProduct,
  onAddToCart
  // onCheckout
}
