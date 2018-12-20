'use strict'
// const getFormFields = require('../get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const calcSubTotal = () => {
  let sum = 0
  $('#cart .productPrice').each(function () {
    const num = this.innerHTML.slice(1)
    console.log(num)
    sum += parseInt(num)
  })
  console.log(sum)
  $('#subTotal').html(`$${sum}`)
}

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
      $('#message2').fadeIn(500)
      $('#message2').text(`Thank you for adding ${product.name} to your cart`)
      $('#message2').fadeOut(3000)
    }
  })
  content += '</table>'
  $('#shopping-cart-list').append(content)
<<<<<<< HEAD
  calcSubTotal()
=======
  let sum = $('#subTotal').html()
  sum = parseInt(sum.slice(1))
  // console.log(sum)
  $('#cart .productPrice').each(function () {
    const num = this.innerHTML.slice(1)
    const subTotal = parseInt(sum) + parseInt(num)
    // console.log(subTotal)
    // console.log(sum)
    $('#subTotal').html(`$${subTotal}`)
  })
>>>>>>> Stylistic changes
}

const onAddToCartMen = event => {
  event.preventDefault()
  const productIdToBuy = event.target.id
  const dataArrayMen = store.mensProduct
  let content = '<table class="table">'
  dataArrayMen.forEach(function (product) {
    if (productIdToBuy === product._id) {
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
