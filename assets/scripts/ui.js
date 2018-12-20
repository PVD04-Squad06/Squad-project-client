'use strict'

const store = require('./store.js')
$('#navbarTwo').hide()

// $('#products').hide()
$('#sidebar').hide()
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
$('#home').click(function () {
  $('#homeContent').show()
  $('#products').hide()
})
$('#PaymentInfo').click(function () {
  $('#paymentContent').show()
})
$('#ViewCart').click(function () {
  $('#cartContent').show()
})

$('#productList').click(function () {
  $('#products').show()
})

$('#exampleModal').on('show.bs.modal', function (event) {
  const button = $(event.relatedTarget) // Button that triggered the modal
  const recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  const modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

const signUpSuccess = data => {
  store.user = data.user
  $('#message2').text('Signed up successfully, you are logged in')
  $('#message2').fadeOut(5000)
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sidebar').show()
  $('#navbarTwo').show()
  $('#navbarOne').hide()
  $('#navbarOne').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message1').text('Sign-up unsuccessful')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
  // alert('Sign Up unsuccessful')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message2').text('Signed in successfully')
  $('#message2').fadeOut(5000)
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').trigger('reset')
  $('#sidebar').show()
  $('#navbarTwo').show()
  $('#navbarOne').hide()
  $('#navbarOne').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  $('#message3').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
  alert('Sign In unsuccessful')
}

const getCartSuccess = data => {
  store.cart = data.cart
  console.log('getCartSuccess', data)
}

const getCartFailure = error => {
  console.log('getCartFailure', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  $('#change-password').trigger('reset')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
  alert('Password Change unsuccessful')
}

const signOutSuccess = data => {
  $('#message2').text('Signed out successfully')
  $('#message2').fadeOut(5000)
  store.user = null
  //   $('#message').removeClass()
  //   $('#message').addClass('success')
  $('#navbarOne').show()
  $('#navbarTwo').hide()
  //   $('#sign-out').modal('hide')
  //   $('.modal-backdrop').remove()
  //   console.log('signOutSuccess ran. Data is :', data)
  // }
  // $('#home').click(function() {
  //       $('#homeContent').show()
  //       $('#costumes').hide()
}

const signOutFailure = error => {
  $('#message2').text('Error on sign out')
  $('#message2').fadeOut(5000)
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  getCartSuccess,
  getCartFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
