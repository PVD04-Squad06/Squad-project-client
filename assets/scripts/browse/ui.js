'use strict'
const store = require('./../store.js')

const getAllProductsSuccess = data => {
  console.log('getAllProductsSuccess running', data)
}

const getAllProductsFailure = error => {
  console.log('getAllProductsFailure', error)
}

const getAProductSuccess = data => {
  console.log('getAProductSuccess', data)
}

const getAProductFailure = error => {
  console.log('getAProductFailure', error)
}

const addToCartSuccess = data => {
//   console.log('addToCartSuccess', data)
//   $('#shopping-cart').html('')
//   let content = '<div class="row">'
//   const dataArray = data.products
//   console.log(store.product)
//   dataArray.forEach(function (product) {
//     // const addToCart = $('.')
//     content += `<div class="col-sm-4">
//       <div class="card" id="imageDiv">
//         <div class="card-body" id="imageDivalso">
//           <h5 class="card-title"></h5>
//           <form class="add-to-cart" id="${product._id}">
//             <p class="card-text">${product.name}</p>
//             <p class="card-text">$${product.price}</p>
//           <form>
//         </div>
//       </div>
//     </div>`
//     // <button class="btn btn-dark add-to-cart" id="${product._id}">Add to cart</button>
//     // store.product._id = product
//     // console.log(product)
//     // console.log(product.image)
//   })
//   content += '</div>'
//   $('#shopping-cart').html(content)
}

const addToCartFailure = error => {
  console.log('addToCartFailure', error)
}

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
          <form class="add-to-cart" id="${product._id}">
            <p class="card-text">${product.name}</p>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-dark add-to-cart">Add to cart</button>
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
          <form class="add-to-cart" id="${product._id}">
            <p class="card-text">${product.name}</p>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-dark add-to-cart">Add to cart</button>
            </form>
        </div>
      </div>
    </div>`
    // console.log(product._id)
    // console.log(product.image)
  })
  $('#productList').html(content)
}

const viewCartSuccess = data => {
  $('#message').text('view cart successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').trigger('reset')
  console.log('viewCartSuccess ran. Data is :', data)
}

const viewCartFailure = error => {
  $('#message').text('Error on view cart')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('viewCartFailure ran. Error is :', error)
}

module.exports = {
  getAllProductsSuccess,
  getAllProductsFailure,
  getAProductSuccess,
  getAProductFailure,
  addToCartSuccess,
  addToCartFailure,
  getWomensClothingSuccess,
  getMensClothingSuccess,
  viewCartSuccess,
  viewCartFailure
}
