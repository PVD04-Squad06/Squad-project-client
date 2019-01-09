'use strict'
// const getFormFields = require('../get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let cartProducts = []
const onAddToCartWomen = event => {
  event.preventDefault()
  const productIdToBuy = event.target.id
  const dataArrayWomen = store.womensProduct
  let content = '<table class="table">'
  dataArrayWomen.forEach(function (product) {
    if (productIdToBuy === product._id) {
      // capture this product object and send it to checkout function
      cartProducts.push(product)
      content += `<tr>
          <td class="productName">${product.name}</td>
          <td class="productPrice">$${product.price}</td>
      </tr>`
      $('#message2').fadeIn(500)
      $('#message2').text(`Thank you for adding ${product.name} to your cart`)
      $('#message2').fadeOut(3000)
    }
  })
  content += '</table>'
  $('#shopping-cart-list').append(content)

  let sum = $('#subTotal').html()
  sum = parseInt(sum.slice(1))
  $('#cart .productPrice').each(function () {
    const num = this.innerHTML.slice(1)
    const subTotal = parseInt(sum) + parseInt(num)
    $('#subTotal').html(`$${subTotal}`)
  })
  // console.log('cartProducts', cartProducts)
}

const onAddToCartMen = event => {
  event.preventDefault()
  const productIdToBuy = event.target.id
  const dataArrayMen = store.mensProduct
  let content = '<table class="table">'
  dataArrayMen.forEach(function (product) {
    if (productIdToBuy === product._id) {
      cartProducts.push(product)
      content += `<tr>
          <td class="productName">${product.name}</td>
          <td class="productPrice">$${product.price}</td>
      </tr>`
      $('#message2').fadeIn(500)
      $('#message2').text(`Thank you for adding ${product.name} to your cart`)
      $('#message2').fadeOut(3000)
    }
  })
  content += '</table>'
  $('#shopping-cart-list').append(content)
  let sum = $('#subTotal').html()
  sum = parseInt(sum.slice(1))
  // console.log(sum)
  $('#cart .productPrice').each(function () {
    const num = this.innerHTML.slice(1)
    const subTotal = parseInt(sum) + parseInt(num)
    $('#subTotal').html(`$${subTotal}`)
  })
  // console.log('cartProducts', cartProducts)
}

const onCheckout = (event) => {
  event.preventDefault()
  // console.log('onCheckout')
  cartProducts = JSON.stringify(cartProducts)
  // get data for product ids, names and prices
  // console.log(cartProducts)
  api.checkout(cartProducts)
    .then(ui.checkoutSuccess)
    .catch(ui.checkoutFailure)
}

const onRetrieve = (event) => {
  event.preventDefault()
  api.orderHistoryApi()
    .then(ui.orderHistSuccess)
    .catch(ui.orderHistFailure)
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
  onCheckout,
  onRetrieve
}
