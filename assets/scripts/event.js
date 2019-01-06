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
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => {
      api.getCart()
        .then(ui.getCartSuccess)
        .catch(ui.getCartFailure)
    })
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

// const onAddToCart = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.addToCart(data)
//     .then(ui.addToCartSuccess)
//     .catch(ui.addToCartFailure)
// }
//
// const onViewCart = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.viewCart(data)
//     .then(ui.viewCartSuccess)
//     .catch(ui.viewCartFailure)
// }

const onMbrSign = event => {
  event.preventDefault()
  console.log('mrbsign clicked')
  $('#mbrsign').text('You are now an exclusive member of this fictional company!')
  // $('#sign-up').trigger('reset')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  // onAddToCart,
  // onViewCart,
  onMbrSign

}
