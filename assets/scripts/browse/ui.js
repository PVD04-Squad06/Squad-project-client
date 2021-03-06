'use strict'
const store = require('./../store.js')

const getWomensClothingSuccess = function (data) {
  $('#productList').html('')
  $('#jumbo').fadeOut('slow')
  let content = '<div class="row">'
  store.womensProduct = data.products
  const dataArray = data.products
  dataArray.forEach(function (product) {
    const imgurUrl = product.image
    // const addToCart = $('.')
    content += `<div class="col-sm-4">
      <div class="card" id="imageDiv">
        <div class="card-body" id="imageDivalso">
          <h5 class="card-title"></h5>
          <img class="card-img" src='${imgurUrl}.jpg' alt="Card image">
          <form class="add-to-cart-women" id="${product._id}">
            <p class="card-text">${product.name}</p>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-dark add-to-cart-women">Add to cart</button>
            </form>
        </div>
      </div>
    </div>`
    // <button class="btn btn-dark add-to-cart" id="${product._id}">Add to cart</button>
    // store.product._id = product
    // console.log(product)
    // console.log(product.image)
  })
  content += '</div>'
  $('#productList').html(content)
}

const getMensClothingSuccess = function (data) {
  $('#productList').html('')
  $('#jumbo').fadeOut('slow')
  let content = '<div class="row">'
  store.mensProduct = data.products
  const dataArray = data.products
  dataArray.forEach(function (product) {
    const imgurUrl = product.image
    content += `<div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <img class="card-img" src='${imgurUrl}.jpg' alt="Card image">
          <form class="add-to-cart-men" id="${product._id}">
            <p class="card-text">${product.name}</p>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-dark add-to-cart-men">Add to cart</button>
            </form>
        </div>
      </div>
    </div>`
    // console.log(product._id)
    // console.log(product.image)
  })
  $('#productList').html(content)
}

const checkoutSuccess = data => {
  // console.log(data)
}

const viewCartSuccess = data => {
  $('#message').text('view cart successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').trigger('reset')
  // console.log('viewCartSuccess ran. Data is :', data)
}

const viewCartFailure = () => {
  $('#message').text('Error on view cart')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('viewCartFailure ran. Error is :', error)
}

const orderHistSuccess = data => {
  // let sum = 0
  let content = '<table class="table">'
  // iterate through data.orders to get created date
  // debugger
  data.orders.forEach(function (order) {
    content += `<tr>
      <td class="orderCreatedAt">Order #: ${order.createdAt}</td>
  </tr>`
    order.cart.forEach(function (product) {
    // nested iteration through cart
    // now you can access properties using dot notation in cart (.name.price)
    // add to sum, sum = 0
    // append to html content
    // once done iterating append to DOM using jquery
    // would like to show date, names of items in cart and total price
      content += `<tr>
        <td class="productName">${product.name}</td>
        <td class="productPrice">${product.price}</td>
    </tr>`
      // product[i].price + product[i+1].price
    })
  })
  $('#orderHistMsg').text('Your current order history')
  $('#orderHistBody').append(content)
  // console.log(data)
}

const orderHistFailure = () => {
  $('#orderHistMsg').text('Unable to Generate Order History')
  // console.error('orderHistFailure ran> Error is :', error)
}

module.exports = {
  checkoutSuccess,
  getWomensClothingSuccess,
  getMensClothingSuccess,
  viewCartSuccess,
  viewCartFailure,
  orderHistSuccess,
  orderHistFailure
}
