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

module.exports = {
  getAllProductsSuccess,
  getAllProductsFailure,
  getAProductSuccess,
  getAProductFailure,
  addToCartSuccess,
  addToCartFailure
}
