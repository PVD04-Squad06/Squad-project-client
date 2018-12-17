'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./event.js')
const browseEvents = require('./browse/events.js')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // browse event listener
  // See all products (index products resource)
  $('#seeProducts').on('click', browseEvents.onGetAllProducts)
  // See specific product by clicking on product square (get products with id)
  // $('#productId').on('submit', browseEvents.onGetAProduct)
  // cart event listeners
  // add to cart event listener
  $('#add-to-cart').on('submit', browseEvents.onAddToCart)
  // Stripe checkout event listener
  // $('#checkout').on('submit', browseEvents.onCheckout)
  $('#productList').on('submit', authEvents.onAddToCart)
  $('#view-cart').on('submit', authEvents.onViewCart)
  $('#productList').on('submit', authEvents.onAddToCart)
  $('#view-cart').on('submit', authEvents.onViewCart)
  $('#mbrsign').on('submit', authEvents.onMbrSign)
})
