$('#navbarTwo').hide()
$('#costumeList').hide()
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
$('#home').click(function () {
  $('#homeContent').show()
})
$('#PaymentInfo').click(function () {
  $('#paymentContent').show()
})
$('#ViewCart').click(function () {
  $('#cartContent').show()
})
