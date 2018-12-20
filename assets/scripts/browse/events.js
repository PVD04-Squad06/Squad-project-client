'use strict'
// const getFormFields = require('../get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onAddToCartWomen = event => {
  event.preventDefault()
  const productIdToBuy = event.target.id
  // $('#shopping-cart').html('')
  const dataArrayWomen = store.womensProduct
  // console.log(store.womensProduct)
  let content = '<table class="table">'
  dataArrayWomen.forEach(function (product) {
    // const addToCart = $('.')
    if (productIdToBuy === product._id) {
      content += `<tr>
          <td class="productName">${product.name}</td>
          <td class="productPrice">$${product.price}</td>
      </tr>`
    }
  })
  content += '</table>'
  $('#shopping-cart-list').append(content)
  let sum = 0
  $('#cart .productPrice').each(function () {
    const num = this.innerHTML.slice(1)
    // console.log(num)
    sum += parseInt(num)
  })
  console.log(sum)
  $('#subTotal').html(`$${sum}`)
}

const onAddToCartMen = event => {
  event.preventDefault()
  const productIdToBuy = event.target.id
  // $('#shopping-cart').html('')
  const dataArrayMen = store.mensProduct
  // console.log(store.womensProduct)
  let content = '<table class="table">'
  dataArrayMen.forEach(function (product) {
    // const addToCart = $('.')
    if (productIdToBuy === product._id) {
      content += `<tr>
          <td class="shopTable">${product.name}</td>
          <td class="shopTable">$${product.price}</td>
      </tr>`
    }
  })
  content += '</table>'
  $('#shopping-cart-list').append(content)
  console.log(content)
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

// Only needed to test front end/back end connection.
// const onGetAllProducts = event => {
//   event.preventDefault()
//   console.log('onGetAllProducts', event.target)
//   api.getAllProducts()
//     .then(ui.getAllProductsSuccess)
//     .catch(ui.getAllProductsFailure)
// }

module.exports = {
  onGetWomensClothing,
  onGetMensClothing,
  onAddToCartWomen,
  onAddToCartMen,
  onCheckout
}
