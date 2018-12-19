'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAllProducts = event => {
  event.preventDefault()
  console.log('onGetAllProducts', event.target)
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

const onGetWomensClothing = event => {
  event.preventDefault()
  api.womensClothingApi()
    .then(ui.getWomensClothingSuccess)
}

const onGetMensClothing = event => {
  event.preventDefault()
  api.mensClothingApi()
    .then(ui.getMensClothingSuccess)
}
//   event.preventDefault()
//   console.log(event.target)
//   api.checkout()
//     .then(ui.checkoutSuccess)
//     .catch(ui.checkoutFailure)
// }

module.exports = {
  onGetAllProducts,
  onGetAProduct,
  onAddToCart,
  onGetWomensClothing,
  onGetMensClothing
  // onCheckout
}
