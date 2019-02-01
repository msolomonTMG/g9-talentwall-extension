// add hide button
$('.nav-links').prepend(
  `
  <button class="mr-2 btn btn-outline-secondary" id="toggle-candidates">
    <i id="toggle-candidates-checkbox" class="fas fa-square-o fw-fw" data-placement="bottom" title=""></i> Hide Cards
  </button>
  `
)
// toggle cards on hide button click
$('#toggle-candidates').on('click', function() {
  // $('.job-applications').toggle()
  var hiddenCards = document.getElementById('hide-candidate-cards')
  if (hiddenCards) {
    hiddenCards.remove();
  } else {
    var style = document.createElement('style')
    style.type = 'text/css'
    style.id = 'hide-candidate-cards'
    style.innerHTML = '.job-applications {display:none;}'
    document.getElementsByTagName('head')[0].appendChild(style)
  }
  $('#toggle-candidates-checkbox').toggleClass('fa-square-o fa-check-square')
})
