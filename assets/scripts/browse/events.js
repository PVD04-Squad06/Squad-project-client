'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAllProducts = event => {
  event.preventDefault()
  console.log(event.target)
  api.getAllProducts
    .then(ui.getAllProductsSuccess)
    .catch(ui.getAllProductsFailure)
}

const onGetAProduct = event => {
  event.preventDefault()
  console.log(event.target)
  api.getAProduct
    .then(ui.getAProductSuccess)
    .catch(ui.getAProductFailure)
}

module.exports = {
  onGetAllProducts,
  onGetAProduct
}
