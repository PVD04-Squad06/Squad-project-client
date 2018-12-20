'use strict'
// const getFormFields = require('../get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onAddToCart = event => {
  event.preventDefault()
  const productIdToBuy = event.target.id
  // $('#shopping-cart').html('')
  const dataArray = store.womensProduct
  // console.log(store.womensProduct)
  let content = '<table>'
  dataArray.forEach(function (product) {
    // const addToCart = $('.')
    if (productIdToBuy === product._id) {
      content += `<tr>
          <td class="shopTable">${product.name}</td>
          <td class="shopTable">$${product.price}</td>
      </tr>`
    }
    // <button class="btn btn-dark add-to-cart" id="${product._id}">Add to cart</button>
    // store.product._id = product
    // console.log(product)
    // console.log(product.image)
  })
  content += '</table>'
  $('#shopping-cart-list').append(content)
  console.log(content)
}
// console.log(event.target.id)
// const data = $(event.target).attr('id')
// api.addToCart()
//   .then(ui.addToCartSuccess)
//   .catch(ui.addToCartFailure)

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

// Only needed to test front end/back end connection.
// const onGetAllProducts = event => {
//   event.preventDefault()
//   console.log('onGetAllProducts', event.target)
//   api.getAllProducts()
//     .then(ui.getAllProductsSuccess)
//     .catch(ui.getAllProductsFailure)
// }

// const onGetAProduct = event => {
//   event.preventDefault()
//   console.log(event.target)
//   api.getAProduct()
//     .then(ui.getAProductSuccess)
//     .catch(ui.getAProductFailure)
// }

module.exports = {
  onAddToCart,
  onGetWomensClothing,
  onGetMensClothing,
  onCheckout
}
