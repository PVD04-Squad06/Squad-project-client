'use strict'

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
  console.log('addToCartSuccess', data)
}

const addToCartFailure = error => {
  console.log('addToCartFailure', error)
}

const getWomensClothingSuccess = function (data) {
  $('#productList').html('')
  let content = '<div class="row">'
  const dataArray = data.products
  dataArray.forEach(function (product) {
    // write a function that extracts last 7 letters of the image url
    let imgurUrl = product.image
    content += `<div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <img class="card-img" src='${imgurUrl}.jpg' alt="Card image">
          <p class="card-text"></p>
          <button type='submit' class="btn btn-primary" id="add-to-cart">Add to cart</button>
          <a href="#" class="btn btn-primary" id="checkout">Checkout Now</a>
        </div>
      </div>
    </div>`
    console.log(product._id)
    console.log(product.image)
  })
  $('#productList').html(content)
}

module.exports = {
  getAllProductsSuccess,
  getAllProductsFailure,
  getAProductSuccess,
  getAProductFailure,
  addToCartSuccess,
  addToCartFailure,
  getWomensClothingSuccess
}
