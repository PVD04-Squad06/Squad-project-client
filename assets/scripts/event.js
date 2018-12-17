'use strict'
const getFormFields = require('./get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

<<<<<<< HEAD
<<<<<<< HEAD
const onAddToCart = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.addToCart(data)
    .then(ui.addToCartSuccess)
    .catch(ui.addToCartFailure)
}

const onViewCart = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.viewCart(data)
    .then(ui.viewCartSuccess)
    .catch(ui.viewCartFailure)
=======
=======
>>>>>>> working footer must space out icons and add links
const onMbrSign = event => {
  event.preventDefault()
  console.log('mrbsign clicked')
  $('#mbrsign').text('You are now an exclusive member!')
  // $('#sign-up').trigger('reset')
<<<<<<< HEAD
>>>>>>> working footer must space out icons and add links
=======
>>>>>>> working footer must space out icons and add links
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
<<<<<<< HEAD
<<<<<<< HEAD
  onAddToCart,
  onViewCart
=======
  onMbrSign
>>>>>>> working footer must space out icons and add links
=======
  onMbrSign
>>>>>>> working footer must space out icons and add links
}
