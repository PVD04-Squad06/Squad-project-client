'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

// Only needed to test front end/back end connection.
// const onGetAllProducts = event => {
//   event.preventDefault()
//   console.log('onGetAllProducts', event.target)
//   api.getAllProducts()
//     .then(ui.getAllProductsSuccess)
//     .catch(ui.getAllProductsFailure)
// }

const onGetAProduct = event => {
  event.preventDefault()
  console.log(event.target)
  api.getAProduct()
    .then(ui.getAProductSuccess)
    .catch(ui.getAProductFailure)
}

const onAddToCart = event => {
  event.preventDefault()
  console.log('inside onAddToCart')
  // console.log(event.target.id)
  console.log($(event.target).attr('id'))
  const data = $(event.target).attr('id')
  api.addToCart(data)
    .then(ui.addToCartSuccess)
    .catch(ui.addToCartFailure)
}

const onCheckout = event => {
  event.preventDefault()
  console.log(event.target)
  console.log('onCheckout')
  api.checkout()
    .then(ui.checkoutSuccess)
    .catch(ui.checkoutFailure)
}

const onGetWomensClothing = event => {
  event.preventDefault()
  api.womensClothingApi()
    .then(ui.getWomensClothingSuccess)
    // .then($('.add-to-cart').on('click', onAddToCart))
    // .then($('#productList').on('click', '.add-to-cart', onAddToCart))
    // .then($('#productList').on('click', '.checkout', onCheckout))
}

const onGetMensClothing = event => {
  event.preventDefault()
  api.mensClothingApi()
    .then(ui.getMensClothingSuccess)
}

module.exports = {
  onGetAProduct,
  onAddToCart,
  onGetWomensClothing,
  onGetMensClothing,
  onCheckout
}
